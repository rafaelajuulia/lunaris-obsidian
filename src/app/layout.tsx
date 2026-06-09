import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import StarField from '@/components/StarField'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lunaris Obsidian',
  description: 'Orientação, clareza e respostas para suas questões.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <StarField />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1, paddingTop: '76px', flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}