'use client'
import { useState } from "react";
import Resource from '../../components/resource';
import Button from "@/components/button";
import SavingsBar from "@/components/savingsBar"
import styles from '../simulation.module.css'
import resourcesData from '../../consts/resouresData'

export default function FirstSimulation() {
    const [credits, setCredits]=useState(12);

    const resourceList = resourcesData.map((resourceObject, i)=> {
        return <Resource dataObject={resourceObject} numCredits={credits} setCredits={setCredits} key={i}/>
    });


    return (
        <div className='contentContainer'>
            <h1 className={styles.simulationTitle}>Month 1</h1>
            <h2 className={styles.simulationDescription}>Select the number of credits to spend in each category. This month, your family has 12 credits.</h2>
            <SavingsBar credits={credits} creditsFromLastMonth={0} />
            <div className={styles.resourcesContainer}>
                {resourceList}
            </div>

            <Button link={'/simulation2IntroPage'} text={'Next month'} query={{creditsFromLastMonth:credits}} />
        </div>
    )
}