import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Menkyo.me - 運転免許を取得しよう',
  description: '日本全国の自動車学校を比較。安い・近い・評判がいい学校をサクッと探そう！',
  keywords: '運転免許, 自動車学校, 教習所, 免許取得',
  openGraph: {
    title: 'Menkyo.me - 運転免許を取得しよう',
    description: '日本全国の自動車学校を比較。安い・近い・評判がいい学校をサクッと探そう！',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <nav className="nav">
            <div className="container">
              <div className="logo">
                <h1>Menkyo.me</h1>
              </div>
              <ul className="nav-links">
                <li><a href="/">ホーム</a></li>
                <li><a href="/list">教習所を探す</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 Menkyo.me. All rights reserved.</p>
            <ul className="footer-links">
              <li><a href="/privacy">プライバシー</a></li>
              <li><a href="/terms">利用規約</a></li>
              <li><a href="/contact">お問い合わせ</a></li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
