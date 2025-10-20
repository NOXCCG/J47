'use client';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { PREF_META, topoUrl } from '@/lib/prefectures';


export default function Home() {
const router = useRouter();
const geogUrl = useMemo(() => topoUrl, []);
return (
<main className="mx-auto max-w-6xl p-6">
<h1 className="text-3xl font-semibold mb-2">Japan Today — Local News by Prefecture</h1>
<p className="text-sm text-gray-600 mb-6">Click a prefecture to view today’s translated headlines from local sources. (Mock data in dev.)</p>
<div className="rounded-2xl shadow bg-white p-2">
<ComposableMap projection="geoMercator">
<ZoomableGroup zoom={1} center={[138, 37]}>
<Geographies geography={geogUrl}>
{({ geographies }) =>
geographies.map((geo) => {
const code = String(geo.id);
const meta = PREF_META[code];
return (
<Geography
key={geo.rsmKey}
geography={geo}
onClick={() => meta && router.push(`/p/${meta.slug}`)}
className="cursor-pointer focus:outline-none"
aria-label={meta ? `${meta.nameEN} (${meta.nameJA})` : 'Prefecture'}
style={{
default: { outline: 'none' },
hover: { outline: 'none' },
pressed: { outline: 'none' }
}}
/>
);
})}
</Geographies>
</ZoomableGroup>
</ComposableMap>
</div>
</main>
);
}
