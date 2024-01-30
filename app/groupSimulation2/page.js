'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import Resource from '../../components/resource';
import Button from '@/components/button';
import SavingsBar from '@/components/savingsBar'
import styles from '../simulation.module.css'
import resourcesData from '../../consts/resouresData'

export default function FirstSimulation() {
    const [credits, setCredits]=useState(10);
    
    const searchParams = useSearchParams();
    const creditsFromLastMonth = searchParams.get('creditsFromLastMonth');

    useEffect( () => {
        setCredits(credits+Number(creditsFromLastMonth));
    }, []);

    const resourceList = resourcesData.map((resourceObject, i)=> {
        return <Resource dataObject={resourceObject} numCredits={credits} setCredits={setCredits} key={i}/>
    });

    const secondaryDescription = creditsFromLastMonth==1 ? 'Select the number of credits to spend in each category. Your family has an income of 10 credits this month and 1 credit of savings.' : `Select the number of credits to spend in each category. Your family has an income of 10 credits this month and ${creditsFromLastMonth} credits of savings.`;


    return (
        <div className='contentContainer'>
            <h1 className={styles.simulationTitle}>Month 2</h1>
            <h2 className={styles.simulationDescription}>{secondaryDescription}</h2>
            <SavingsBar credits={credits} creditsFromLastMonth={creditsFromLastMonth} />
            <div className={styles.resourcesContainer}>
                {resourceList}
            </div>
            <Button link={'/simulation3IntroPage'} text={'Next Month'} query={{creditsFromLastMonth:credits}} />
        </div>
        
    )
}