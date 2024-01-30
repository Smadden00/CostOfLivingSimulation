'use client'
import { useSearchParams } from 'next/navigation'
import Button from '../../components/button'
import styles from './simulation3IntroPage.module.css'

export default function SimulationIntroPage() {

  const searchParams = useSearchParams();
  const creditsFromLastMonth = parseInt(searchParams.get('creditsFromLastMonth'));

  return (
    <div className={`contentContainer ${styles.container}`}>
      <h1 style={{fontSize:'xx-large'}}>Month 3: Applying for Benefits</h1>
      <div className={styles.pageInformationContainer}>
        <h2>This month, you heard from a friend about FoodShare, so you applied and got approved for benefits. This increases your monthly income to 14 credits.</h2>
        <h2>Savings from previous month: {creditsFromLastMonth}</h2>
        <h2>Total budget this month: {creditsFromLastMonth+14}</h2>
      </div>
      <Button link={'/groupSimulation3'} text={'Continue'} query={{creditsFromLastMonth: creditsFromLastMonth}} />
    </div>
  )
}