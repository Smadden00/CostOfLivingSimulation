import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cost of Living Simulation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='header'> 
          <div className='headerTitle'>Cost of Living Simulator</div>
        </div>
        {children}
        <div className='footer'/>
      </body>
    </html>
  )
}
