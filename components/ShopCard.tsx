
import Link from 'next/link'
type Shop = {
  id: string; name: string; region: 'seoul'|'gyeonggi'|'incheon'; city: string;
  type: 'thai'|'aroma'|'healing'; price_min: number; rating: number|null;
  thumbnail_url: string|null; verified: boolean;
}
export default function ShopCard({ s }: { s: Shop }){
  return (
    <div className="card overflow-hidden">
      <div className="h-36 bg-cover bg-center"
           style={{backgroundImage:`url(${s.thumbnail_url || 'https://images.unsplash.com/photo-1556228453-efd1e3f0f54b?q=80&w=1200&auto=format&fit=crop'})`}}/>
      <div className="p-4">
        <div className="flex items-center gap-2">
          {s.verified && <span className="badge badge-star">인증</span>}
          <span className="text-sm" style={{color:'var(--muted)'}}>{s.region.toUpperCase()} · {s.city}</span>
          <span className="ml-auto font-bold">{s.price_min.toLocaleString()}원~</span>
        </div>
        <h3 className="mt-1 text-lg font-semibold">{s.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="chip">{s.type.toUpperCase()}</span>
          <Link href={`/shops/${s.id}`} className="btn">상세보기 →</Link>
        </div>
      </div>
    </div>
  )
}
