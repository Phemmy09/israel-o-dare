export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // 1. Try direct asset fetch
    let response = await env.ASSETS.fetch(request)

    // 2. Clean URLs fallback (e.g. /services -> /services.html or /services/index.html)
    if (response.status === 404 && !url.pathname.includes('.')) {
      const trimmedPath = url.pathname.replace(/\/$/, '')
      
      // Try /path.html
      const htmlUrl = new URL(`${trimmedPath}.html`, request.url)
      let htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl.toString(), request))
      if (htmlResponse.status !== 404) {
        return htmlResponse
      }

      // Try /path/index.html
      const indexPath = new URL(`${trimmedPath}/index.html`, request.url)
      htmlResponse = await env.ASSETS.fetch(new Request(indexPath.toString(), request))
      if (htmlResponse.status !== 404) {
        return htmlResponse
      }
    }

    return response
  },
}
