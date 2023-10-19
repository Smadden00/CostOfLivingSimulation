'use client'
import Link from 'next/link';

export default function SimulationIntroPage() {

    const pageContents =
      {
        header: 'Month 1: Allocating Resources',
        description: 'You have a household consisting of your spouse and two children aged four and seven. Both you and your spouse currently have minimum wage jobs.\n\nYou have a household consisting of your spouse and two children aged four and seven. Both you and your spouse currently have minimum wage jobs.\n\nWith your monthly household income, your family has 12 credits to use across six categories:',
        list: ['Housing', 'Utilities','Transportation','Health Care','Education','Food'],
        description2: 'Any remaining credits will be put into your family\'s savings.'
      }
    ;

    const listItems = pageContents.list.map((item) => <li>{item}</li>);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 style={{fontSize:'xx-large', marginTop:'-50px'}}>{pageContents.header}</h1>
      <h2 style={{marginTop:'20px'}}>{pageContents.description}</h2>
      <ul style={{marginTop:'20px', listStyleType:'format'}}>{listItems}</ul>
      <h2 style={{marginTop:'20px', marginBottom:'20px'}}>{pageContents.description2}</h2>
      <Link href='/groupSimulation1'><h2 className='openingButton' style={{marginTop:'20px', marginBottom:'-40px'}}>Continue</h2></Link>
    </main>
  )
}