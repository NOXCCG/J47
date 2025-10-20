# JP47 News (MVP)


Interactive map of Japan’s 47 prefectures. Click to view today’s local headlines (mock data for now).


## Quick start
1. `pnpm i` (or `npm i` / `yarn`)
2. `pnpm dev` then open http://localhost:3000
3. Click a prefecture → see mocked headlines.


## Next steps
- Replace `pages/api/news.ts` with a real fetcher from your ingestion layer.
- Vendor a local TopoJSON file for stability and licensing.
- Add a `GET /api/news` in your backend reading from Redis/DB (see spec §5/§6).
- Add translation via DeepL/Google and store EN/JA.


## Notes
- All times shown in JST.
- Respect robots.txt and source TOS. Prefer RSS.
