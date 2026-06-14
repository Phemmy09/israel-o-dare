import fs from 'fs'
import path from 'path'
import { parseMarkdown, BlogPost } from './markdown'

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content/blog')
  
  if (!fs.existsSync(blogDir)) {
    return []
  }
  
  try {
    const files = fs.readdirSync(blogDir)
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.md$/, '')
        const fullPath = path.join(blogDir, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        // Match frontmatter block: --- [yaml] --- [content]
        const match = fileContents.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/)
        const metadata: Record<string, string> = {}
        let mdContent = fileContents
        
        if (match) {
          const frontmatter = match[1]
          mdContent = match[2]
          
          frontmatter.split(/\r?\n/).forEach((line) => {
            const parts = line.split(':')
            if (parts.length >= 2) {
              const key = parts[0].trim()
              const value = parts.slice(1).join(':').trim().replace(/^['"]|['"]$/g, '')
              metadata[key] = value
            }
          })
        }
        
        return {
          slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date || new Date().toISOString().split('T')[0],
          category: metadata.category || 'General',
          summary: metadata.summary || '',
          image: metadata.image || undefined,
          content: parseMarkdown(mdContent),
        }
      })
      
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}
