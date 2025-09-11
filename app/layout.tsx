
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: '케이마사지 · 디렉터리/마켓플레이스',
  description: '업소 카드 리스트 + 지역/유형 필터 + 회원/입점 구조',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main className="container py-4">{children}</main>
      </body>
    </html>
  )
}
