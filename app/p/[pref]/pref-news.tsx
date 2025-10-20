import 'server-only';


async function getNews(pref: string) {
const today = new Date().toISOString().slice(0, 10);
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/news?pref=${pref}&date=${today}`, {
next: { revalidate: 60 }
});
if (!res.ok) throw new Error('Failed to load news');
return res.json();
}


export default async function PrefNews({ pref }: { pref: string }) {
const data = await getNews(pref);
return (
<section className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
{data.items.map((item: any) => (
<article key={item.id} className="border rounded-xl p-4 bg-white">
<a href={item.source_url} target="_blank" rel="noopener noreferrer" className="block">
<h3 className="font-semibold leading-snug line-clamp-2">{item.title_en}</h3>
</a>
<p className="text-xs text-gray-500 mt-1">{item.source_name} • {new Date(item.published_at).toLocaleTimeString('en-JP', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tokyo' })} JST</p>
{item.image_url && <img src={item.image_url} alt="" className="mt-3 rounded-lg" />}
<p className="text-sm mt-2 line-clamp-3">{item.summary_en}</p>
<div className="flex gap-2 mt-3 text-xs">
<span className="px-2 py-1 rounded-full bg-slate-100">{item.topic}</span>
<span className="px-2 py-1 rounded-full bg-slate-100">{item.source_type}</span>
</div>
<details className="mt-3">
<summary className="text-xs text-blue-700">Show Japanese</summary>
<p className="text-sm mt-1">{item.title_ja}</p>
{item.summary_ja && <p className="text-sm text-gray-700 mt-1">{item.summary_ja}</p>}
</details>
</article>
))}
</section>
);
}
