import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cost of Living Simulation',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='header'> 
          <div>Cost of Living Simulator</div>
        </div>
        {children}
        <div className='footer'/>
      </body>
    </html>
  )
}
