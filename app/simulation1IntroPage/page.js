'use client'
import Link from 'next/link';
import Resource from '../resource';

export default function SimulationIntroPage() {

    const pageContents =
      {
        header: 'Month 1: Allocating Resources',
        description: 'You have a household consisting of your spouse and two children aged four and seven. Both you and your spouse currently have minimum wage jobs. With your monthly household income, your family has 12 credits to use across six categories:',
        list: ['Housing', 'Utilities','Transportation','Health Care','Education/Childcare','Food'],
        description2: 'Any remaining credits will be put into your family\'s savings. You can use your accrued savings in the following months.',
        creditsExplanation: 'You will have up to three credits to spend on each resource. The description of each resource credit will be displayed as follows:'
      };

    const resourceObject = {creditType: 'Example Resource', descriptionArray: ['Description of using 1 credit.', 'Description of using 2 credits.', 'Description of using 3 credits.']};

    const listItems = pageContents.list.map((item, i) => <li key={i}>{item}</li>);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 style={{fontSize:'xx-large', marginTop:'-50px'}}>{pageContents.header}</h1>
      <h2 style={{marginTop:'20px'}}>{pageContents.description}</h2>
      <ul style={{marginTop:'20px', listStyleType:'format'}}>{listItems}</ul>
      <h2 style={{marginTop:'20px', marginBottom:'20px'}}>{pageContents.description2}</h2>
      <h2 style={{marginTop:'20px', marginBottom:'20px'}}>{pageContents.creditsExplanation}</h2>
      <Resource dataObject={resourceObject} numCredits={0} setCredits={null} key={1}/>
      <Link href='/groupSimulation1'><h2 className='openingButton' style={{marginTop:'20px', marginBottom:'-40px'}}>Continue</h2></Link>
    </main>
  )
}