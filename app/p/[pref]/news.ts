import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
const { pref = 'tokyo', date } = req.query as { pref?: string; date?: string };
const now = new Date();
res.status(200).json({
items: [
{
id: 'demo-1',
source_name: 'Tokyo Metropolitan Government',
source_type: 'gov',
source_url: 'https://www.metro.tokyo.lg.jp/',
published_at: now.toISOString(),
title_en: `Demo headline for ${pref}`,
title_ja: 'デモの見出し',
summary_en: 'Placeholder English summary translated from Japanese.',
summary_ja: '日本語から翻訳された英語の要約のプレースホルダーです。',
topic: 'Society',
image_url: null
},
{
id: 'demo-2',
source_name: 'NHK Local',
source_type: 'media',
source_url: 'https://www.nhk.or.jp/archives/chiiki/',
published_at: now.toISOString(),
title_en: `${pref} — Rail service resumes after brief delay`,
title_ja: `${pref}で一時遅延のあった鉄道が再開`,
summary_en: 'Local operator reports normal service from 10:30 JST. No injuries reported.',
summary_ja: '地元事業者は10:30ごろに通常運転へ戻ったと発表。けが人なし。',
topic: 'Transport',
image_url: null
}
]
});
}
