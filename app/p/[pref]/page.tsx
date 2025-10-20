import { Suspense } from 'react';
import PrefNews from './pref-news';


export default function PrefPage({ params }: { params: { pref: string } }) {
const pref = params.pref;
return (
<main className="mx-auto max-w-6xl p-6">
<h1 className="text-2xl font-semibold capitalize">{pref} — Today’s Headlines</h1>
<p className="text-sm text-gray-600">Local sources • Auto‑translated to English • JST</p>
<Suspense fallback={<div className="mt-6 animate-pulse">Loading…</div>}>
{/* @ts-expect-error Async Server Component */}
<PrefNews pref={pref} />
</Suspense>
</main>
);
}
