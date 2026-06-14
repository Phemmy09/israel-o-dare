export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  summary: string
  image?: string
  content: string
}

function inlineFormatting(text: string): string {
  return text
    // Bold: **text**
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
    // Italic: *text*
    .replace(/\*(.*?)\*/g, '<em class="italic text-neutral-300">$1</em>')
    // Inline code: `code`
    .replace(/`(.*?)`/g, '<code class="bg-neutral-900 px-1.5 py-0.5 rounded font-mono text-xs text-red-400 border border-neutral-800">$1</code>')
    // Links: [text](url)
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:text-red-400 hover:underline transition-colors">$1</a>')
}

export function parseMarkdown(md: string): string {
  // Convert markdown structure to HTML
  const paragraphs = md.split(/\r?\n\r?\n/)
  
  return paragraphs
    .map((p) => {
      const trimmed = p.trim()
      if (!trimmed) return ''
      
      // Fenced code block (multi-line)
      if (trimmed.startsWith('```')) {
        const lines = trimmed.split('\n')
        const code = lines.slice(1, -1).join('\n')
        return `<pre class="bg-neutral-900 border border-neutral-800/80 p-5 rounded-2xl font-mono text-xs text-neutral-300 overflow-x-auto my-6 shadow-inner"><code>${code}</code></pre>`
      }

      // Headers
      if (trimmed.startsWith('### ')) {
        return `<h4 class="text-lg font-black text-white mt-8 mb-3 tracking-wide">${trimmed.slice(4)}</h4>`
      }
      if (trimmed.startsWith('## ')) {
        return `<h3 class="text-xl font-black text-white mt-10 mb-4 tracking-wide">${trimmed.slice(3)}</h3>`
      }
      if (trimmed.startsWith('# ')) {
        return `<h2 class="text-2xl font-black text-white mt-12 mb-6 tracking-wide">${trimmed.slice(2)}</h2>`
      }
      
      // Block quotes
      if (trimmed.startsWith('> ')) {
        const quoteText = trimmed.replace(/^>\s+/, '').replace(/\n>\s+/g, ' ')
        return `<blockquote class="border-l-4 border-red-500 bg-red-950/10 text-neutral-300 italic px-5 py-4 my-6 rounded-r-xl">${inlineFormatting(quoteText)}</blockquote>`
      }

      // List items (unordered)
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split(/\r?\n[*-]\s+/)
        const listItems = items
          .map((item) => {
            const cleanItem = item.replace(/^[*-]\s+/, '')
            return `<li class="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-2">${inlineFormatting(cleanItem)}</li>`
          })
          .join('')
        return `<ul class="list-disc pl-6 my-4 space-y-1.5">${listItems}</ul>`
      }
      
      return `<p class="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-5">${inlineFormatting(trimmed)}</p>`
    })
    .join('')
}
