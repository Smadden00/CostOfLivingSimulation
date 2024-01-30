'use client'
import Resource from '../../components/resource';
import styles from './simulation1Intro.module.css'
import Button from '@/components/button';

export default function SimulationIntroPage() {

    const pageContents =
      {
        header: 'Month 1: Allocating Resources',
        description: 'You have a household consisting of your spouse and two children aged four and seven. Both you and your spouse currently have minimum wage jobs. With your monthly household income, your family has 12 credits to use across six categories:',
        list: ['Housing', 'Utilities','Transportation','Health Care','Education/Childcare','Food'],
        description2: 'Any remaining credits will be put into your family\'s savings. You can use your accrued savings in the following months.',
        creditsExplanation: 'You will have up to three credits to spend on each resource. The description of each resource credit will be displayed as follows:'
      };

    const resourceObject = {
      creditType: 'Example Resource', 
      descriptionArray: [
        'Description of using 1 credit on this resource.', 
        'Description of using 2 credits on this resource.', 
        'Description of using 3 credits on this resource.'
      ]
    };

    const listItems = pageContents.list.map((item, i) => <li key={i}>{item}</li>);

  return (
    <main className={`contentContainer ${styles.introContainer}`}>
      <h1 className={styles.header}>{pageContents.header}</h1>
      <h2 className={`${styles.topSpacing}`}>{pageContents.description}</h2>
      <ul className={`${styles.topSpacing} ${styles.listStyle}`}>{listItems}</ul>
      <h2 className={`${styles.topSpacing} ${styles.bottomSpacing}`}>{pageContents.description2}</h2>
      <h2 className={`${styles.topSpacing} ${styles.bottomSpacing}`}>{pageContents.creditsExplanation}</h2>
      <Resource dataObject={resourceObject} numCredits={0} setCredits={null} key={1}/>
      <Button link={'/groupSimulation1'} text={'Continue'} />
    </main>
  )
}