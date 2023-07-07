import Header from '@/Header'
import Navbar from '@/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB Clone made by Zane Falcao',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
            <Header />
          {/* Navbar */}
            <Navbar />
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
