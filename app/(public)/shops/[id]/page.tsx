
import { notFound } from 'next/navigation'
async function getShop(id:string){
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/shops?id=' + id, { next:{ revalidate:60 } })
  if(!res.ok) return null
  const arr = await res.json()
  return Array.isArray(arr) ? arr[0] : arr
}
export default async function ShopDetail({ params }:{ params:{ id:string } }){
  const shop = await getShop(params.id)
  if(!shop) return notFound()
  return (
    <div className="card overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{backgroundImage:`url(${shop.thumbnail_url || 'https://images.unsplash.com/photo-1556228453-efd1e3f0f54b?q=80&w=1200&auto=format&fit=crop'})`}}/>
      <div className="p-4">
        <div className="flex items-center gap-2">
          {shop.verified && <span className="badge badge-star">인증</span>}
          <span className="text-sm" style={{color:'var(--muted)'}}>{shop.region.toUpperCase()} · {shop.city}</span>
          <span className="ml-auto font-bold">{shop.price_min.toLocaleString()}원~</span>
        </div>
        <h1 className="mt-1 text-2xl font-semibold">{shop.name}</h1>
        <p className="mt-2" style={{color:'var(--muted)'}}>{shop.description || '소개 문구가 준비중입니다.'}</p>
      </div>
    </div>
  )
}
