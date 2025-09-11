
'use client'
import { useEffect, useState } from 'react'
import FilterBar from '@/components/FilterBar'
import ShopCard from '@/components/ShopCard'
type Shop = any
export default function Home() {
  const [shops, setShops] = useState<Shop[]>([])
  const [q, setQ] = useState<Record<string,string>>({region:'all', type:'all', sort:'popular'})
  useEffect(()=>{ const sp=new URLSearchParams(q); fetch('/api/shops?'+sp).then(r=>r.json()).then(setShops) }, [q])
  return (
    <div className="space-y-4">
      <section className="card p-4">
        <h1 className="text-2xl font-bold mb-2">전국 마사지 디렉터리</h1>
        <FilterBar onChange={(f)=>setQ(prev=>({...prev,...f}))}/>
      </section>
      <section className="grid-cards">
        {shops.map((s:any)=>(<ShopCard key={s.id} s={s}/>))}
      </section>
    </div>
  )
}
