import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const inter = Roboto({ 
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: ' Билетопоиск',
  description: 'Сервис поиска билетов в кино',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
