# API Setup Instructions

## CORS Error Solution

If you're getting CORS errors, the Next.js proxy is enabled by default. However, you need to ensure your backend API URL is correctly configured.

## Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Your backend API base URL (without trailing slash)
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Optional: Set to false to disable proxy and use direct API calls (requires CORS on backend)
NEXT_PUBLIC_USE_API_PROXY=true
```

## Troubleshooting

### Error: Getting HTML/Splunk error page instead of JSON

This means the API URL is pointing to the wrong server. Check:

1. **Verify your backend is running:**
   ```bash
   # Test if your backend is accessible
   curl http://localhost:8000/api/users/me/
   ```

2. **Check your environment variable:**
   - Make sure `.env.local` exists in the root directory
   - Verify `NEXT_PUBLIC_API_URL` is set correctly
   - Restart your Next.js dev server after changing `.env.local`

3. **Check the proxy logs:**
   - Look at your Next.js server console for "Proxy POST:" or "Proxy GET:" logs
   - These will show the exact URL being called

4. **Common issues:**
   - Backend not running on port 8000
   - API URL includes `/api` twice (e.g., `http://localhost:8000/api/api/...`)
   - Wrong port number
   - Backend running on different host

## Backend Requirements

Your backend should:
- Be running on the URL specified in `NEXT_PUBLIC_API_URL`
- Accept JSON requests
- Return JSON responses
- Have endpoints at:
  - `POST /api/users/artisan/register/`
  - `POST /api/users/client/register/`
  - `POST /api/users/login/`
  - `GET /api/users/me/`
  - `GET /api/users/profile/`
  - `PUT /api/users/profile/update/`

## Testing the Proxy

You can test if the proxy is working by checking the browser Network tab:
- Requests should go to: `http://localhost:3000/api/proxy/users/...`
- The proxy will forward to: `http://localhost:8000/api/users/...`

