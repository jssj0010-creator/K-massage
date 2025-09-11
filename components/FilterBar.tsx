
'use client'
type Props = { onChange: (f: Record<string,string>) => void }
export default function FilterBar({ onChange }: Props){
  return (
    <div className="flex flex-wrap gap-2">
      <select className="chip" onChange={e=>onChange({region:e.target.value})}>
        <option value="all">전체 지역</option><option value="seoul">서울</option>
        <option value="gyeonggi">경기</option><option value="incheon">인천</option>
      </select>
      <select className="chip" onChange={e=>onChange({type:e.target.value})}>
        <option value="all">전체 유형</option><option value="thai">타이</option>
        <option value="aroma">아로마</option><option value="healing">힐링</option>
      </select>
      <select className="chip" onChange={e=>onChange({sort:e.target.value})}>
        <option value="popular">인기순</option><option value="recent">최신순</option>
        <option value="rating">평점순</option><option value="price">가격낮은순</option>
      </select>
    </div>
  )
}
