'use client'

import { useState, useEffect } from 'react'
import { parseMarkdown } from '@/lib/markdown'
import { Copy, Check, FileText, Play, Eye } from 'lucide-react'

export default function BlogDraftPage() {
  const [title, setTitle] = useState('My Daily Log Title')
  const [category, setCategory] = useState('Journey')
  const [summary, setSummary] = useState('Brief summary of what this post is about.')
  const [image, setImage] = useState('/images/DGF_6811 copy.jpg')
  const [markdown, setMarkdown] = useState(`Write your markdown here. You can use:
- **Bold text**
- *Italic text*
- \`inline code\`
- [Clickable Links](https://example.com)

## A Subheading
And write paragraphs as usual. Double linebreaks create new paragraphs.`)

  const [date, setDate] = useState('')
  const [copied, setCopied] = useState(false)
  const [renderedHtml, setRenderedHtml] = useState('')

  useEffect(() => {
    // Default date to today in YYYY-MM-DD
    const today = new Date().toISOString().split('T')[0]
    setDate(today)
  }, [])

  useEffect(() => {
    setRenderedHtml(parseMarkdown(markdown))
  }, [markdown])

  const generatedMarkdown = `---
title: '${title}'
date: '${date}'
category: '${category}'
summary: '${summary}'
image: '${image}'
---

${markdown}`

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob top-[15%] right-[10%] bg-red-600/10" />
      <div className="glow-blob top-[55%] left-[5%] bg-red-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-12">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Author Tools</p>
          <h1 className="text-3xl md:text-5xl font-black text-white">Blog drafting engine</h1>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mt-2 font-light">
            Draft your post, preview the live HTML rendering, and copy the final Markdown code. Save it as a `.md` file inside `content/blog/` to publish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left panel: Form editor */}
          <div className="lg:col-span-5 space-y-6 bg-neutral-950/60 border border-neutral-900 p-6 sm:p-8 rounded-3xl">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-neutral-900 pb-3">
              <FileText className="w-5 h-5 text-red-500" /> Editor Metadata
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-1.5 tracking-wider">Post Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-400 mb-1.5 tracking-wider">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500/50"
                  >
                    <option value="Journey">Journey</option>
                    <option value="Research">Research</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-400 mb-1.5 tracking-wider">Publish Date</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="YYYY-MM-DD"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-1.5 tracking-wider">Summary Link / Image Path</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/images/..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500/50 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-1.5 tracking-wider">Summary / Excerpt</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={2}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500/50 resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-400 mb-1.5 tracking-wider">Markdown Content</label>
                <textarea
                  value={markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                  rows={10}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-red-500/50 resize-y"
                />
              </div>
            </div>
          </div>

          {/* Right panel: Live HTML preview & Output */}
          <div className="lg:col-span-7 space-y-6">
            {/* HTML Live Preview */}
            <div className="bg-neutral-950/40 border border-neutral-800/80 p-8 rounded-3xl min-h-[300px]">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-neutral-900 pb-3 mb-6">
                <Eye className="w-5 h-5 text-red-500" /> Live HTML Preview
              </h2>

              <div>
                <span className="px-2.5 py-0.5 bg-red-950/20 border border-red-500/20 rounded-md text-[10px] text-red-400 font-bold uppercase tracking-wider">
                  {category}
                </span>
                <h1 className="text-3xl font-black text-white mt-4 mb-6 leading-tight tracking-wide">{title}</h1>
                <div
                  className="prose prose-invert max-w-none text-neutral-300"
                  dangerouslySetInnerHTML={{ __html: renderedHtml }}
                />
              </div>
            </div>

            {/* Markdown Output Code */}
            <div className="bg-neutral-950/80 border border-neutral-900 p-6 rounded-3xl relative">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
                <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Play className="w-4 h-4 text-red-500" /> Markdown Output File Code
                </h2>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-lg text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-neutral-900 p-4 rounded-xl font-mono text-[10px] sm:text-xs text-neutral-400 overflow-x-auto max-h-48 shadow-inner select-all">
                <code>{generatedMarkdown}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
