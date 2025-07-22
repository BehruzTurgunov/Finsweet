import './globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Mening Sahifam',
  description: 'Next.js App Router bilan tayyorlangan sahifa',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="uz">
      <body className='flex flex-col w-full min-h-screen'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
