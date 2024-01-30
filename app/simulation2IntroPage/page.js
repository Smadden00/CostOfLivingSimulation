'use client'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/button';
import styles from './simulation2IntroPage.module.css'

export default function SimulationIntroPage() {

    const searchParams = useSearchParams();
    const creditsFromLastMonth = parseInt(searchParams.get('creditsFromLastMonth'));


  return (
    <div className={`contentContainer ${styles.container}`}>
      <h1 style={{fontSize:'xx-large'}}>Month 2: Scarcity</h1>
      <div className={styles.pageInformationContainer}>
        <h2>This month, your spouse had their work hours cut from 40 to 20. This reduces your monthly household income to 10 credits.</h2>
        <h2>Savings from previous month: {creditsFromLastMonth}</h2>
        <h2>Total budget this month: {creditsFromLastMonth+10}</h2>
      </div>
      <Button link={'/groupSimulation2'} text={'Continue'} query={{creditsFromLastMonth:creditsFromLastMonth}} />
    </div>
  )
}