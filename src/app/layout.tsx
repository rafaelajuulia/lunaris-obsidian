import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import StarField from '@/components/StarField'

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
      <body>
        <StarField />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1, paddingTop: '76px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}