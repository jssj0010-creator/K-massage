
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export async function GET(req: NextRequest){
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  const region = searchParams.get('region') || 'all'
  const type = searchParams.get('type') || 'all'
  if (id) {
    const { data, error } = await sb.from('shops').select('*').eq('id', id).limit(1)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
  }
  let q = sb.from('shops').select('*').eq('approved', true).limit(60)
  if (region !== 'all') q = q.eq('region', region)
  if (type !== 'all') q = q.eq('type', type)
  const { data, error } = await q
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest){
  const b = await req.json()
  const { data, error } = await sb.from('shops').insert({
    name:b.name, region:b.region, city:b.city, type:b.type, price_min:b.price_min,
    thumbnail_url:b.thumbnail_url || null, approved:false
  }).select('*')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
