
'use client'
import Link from 'next/link'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
export default function Navbar(){
  return (
    <header className="header">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-label="K">
            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffb657"/><stop offset="50%" stopColor="#ff9a2e"/><stop offset="100%" stopColor="#ff7a00"/>
            </linearGradient></defs>
            <path d="M32 58C10 46 2 36 2 25.5C2 15.5 10 8 19 8c5 0 9 2.2 13 6.9C36 10.2 40 8 45 8c9 0 17 7.5 17 17.5C62 36 54 46 32 58z" fill="url(#g)"/>
            <text x="32" y="38" textAnchor="middle" fontSize="22" fontWeight="900" fill="#fff">K</text>
          </svg>
          <span className="font-extrabold">케이마사지</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/regions" className="btn"><MapPin size={16}/>지역</Link>
          <a href="tel:010-4637-9556" className="btn"><Phone size={16}/>전화</a>
          <a href="https://open.kakao.com/o/shGxbqRh" className="btn btn-primary"><MessageCircle size={16}/>오픈채팅</a>
        </nav>
      </div>
    </header>
  )
}
