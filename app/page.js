import styles from "./homePage.module.css"
import Button from '../components/button'

export default function Home() {

  const openingText = 'Welcome to the Cost of Living Simulation! In this simulation, participants simulate the experience of a low-income family living on a limited budget and are challenged to effectively allocate resources over time. This experience develops a more complete understanding of issues surrounding poverty.'

  return (
    <main className='contentContainer'>
      <h1 className={styles.openingDescription}>{openingText}</h1>
      <Button link={'/simulation1IntroPage'} text={'Begin Simulation'} query={{introPageNum:0}}/>
    </main>
  )
}
