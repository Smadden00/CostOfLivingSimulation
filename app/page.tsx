import './globals.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='openingHeader'>Welcome to the Cost of Living Simulation</h1>
      <h2 className='openingDescription'>This exercise will walk you through what it is like to live in a scarcity mindset; 
      when you barely have enough to scrape by. 
      Living like this each day consumes energy and can make planning ahead and problem solving much harder than
       it may be for someone that is living with abundance. 
      It is important to learn what a scarcity mindset is like so that we can empathize with what our clients experience every day and deliver them a better product.</h2>
      <Link href='/simulation1'><h2 className='openingButton'>Begin the simulation</h2></Link>
    </main>
  )
}
