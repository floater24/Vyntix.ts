export async function middleware(req: Request) {
    const url = new URL(req.url);
  
    // API レスポンスを Cloudflare Workers でキャッシュ
    if (url.pathname.startsWith("/api")) {
      const response = await fetch(req.url);
      const clonedResponse = new Response(response.body, {
        headers: { "Cache-Control": "public, max-age=60" },
      });
      return clonedResponse;
    }
  
    return fetch(req);
  }