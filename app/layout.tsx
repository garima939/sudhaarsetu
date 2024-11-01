import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './app/page.tsx'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'सुधार Setu for a Better India',
  description: 'Empowering citizens to build a brighter future for our nation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}3</main>
        <Footer />
      </body>
    </html>
  )
}