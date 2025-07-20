
import './globals.css' 
import Header from "../components/Header"
import Footer from "../components/Footer"
export const metadata = {
  title: 'Mening Sahifam',
  description: 'Next.js App Router bilan tayyorlangan sahifa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className='flex flex-col w-full min-h-screen'>
        <Header />       
        <main className='grow'>{children}</main> 
        <Footer/>
      </body>
    </html>
  )
}
