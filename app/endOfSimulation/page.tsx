import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 style={{fontSize:'xx-large', marginTop:'100px'}}>Thank you for participating in this simulation!</h1>
      <h2>Did you break the cycle of poverty?</h2>
      <Link href='/'><h2 className='openingButton'>Back to Home</h2></Link>
    </main>
  )
}
