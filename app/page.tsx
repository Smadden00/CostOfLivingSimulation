import './globals.css'
import Link from 'next/link';

export default function Home() {

  const text = 'Welcome to the Cost of Living Simulation! In this simulation, participants simulate the experience of a low-income family living on a limited budget and are challenged to effectively allocate resources over time. This experience develops a more complete understanding of issues surrounding poverty.'

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className='openingDescription'>{text}</h2>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <Link href={{pathname: '/simulation1IntroPage', query: {introPageNum:0}}}><h2 className='openingButton'>Begin Simulation</h2></Link>
      </div>
    </main>
  )
}
