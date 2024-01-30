import Button from '@/components/button';
import styles from './endOfSimulation.module.css'

export default function Home() {
  return (
    <div className={`contentContainer ${styles.container}`}>
      <h1 style={{fontSize:'xx-large', marginTop: '80px'}}>Thank you for participating in this simulation!</h1>
      <h2>Did you break the cycle of poverty?</h2>
      <Button link={'/'} text={'Back to Home'} />
    </div>
  )
}
