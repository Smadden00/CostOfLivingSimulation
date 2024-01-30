'use client'
import styles from './savingsBar.module.css'

export default function SavingsBar({credits, creditsFromLastMonth}) {

    return (
        <div className={styles.savingsContainer}>
            <div className={styles.savingsTopRow}>
                <h2 className={styles.savingsNumber}>Savings: {credits}</h2>
                <div className={styles.savingsBackgroundBar} style={{width:'475px'}} >
                    <div className={styles.savingsForegroundBar} style={{width: `${credits*475/(10+Number(creditsFromLastMonth))}px`}} />
                </div>
            </div>
            <div className={styles.savingsBottomRow}>
                <div className={styles.savingsBottomRowSpacer}/>
                <h2 className={styles.savingsDescription}>These credits will carry over to next month.</h2>
            </div>
        </div>
    )
}