
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        surface: '#f8fafc',
        border: '#e5e7eb',
        text: '#111827',
        muted: '#6b7280',
        brand: { DEFAULT:'#ff7a00', 2:'#ff9a2e' }
      },
      borderRadius: { xl:'16px', '2xl':'20px' },
      boxShadow: { card: '0 8px 24px rgba(17,24,39,.06)' }
    }
  },
  plugins: []
}
export default config
