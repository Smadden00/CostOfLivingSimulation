'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Resource from './resource';
import Link from 'next/link';


export default function FirstSimulation() {
    const [credits, setCredits]=useState(4);
    
    const searchParams = useSearchParams();
    const creditsFromLastMonth = searchParams.get('creditsFromLastMonth');

    useEffect( () => {
        setCredits(credits+Number(creditsFromLastMonth));
    }, []);

    const resourcesData=[
        {creditType: 'Housing', descriptionArray: ['1-bedroom apartment with no yard.', '2-bedroom apartment with yard.', '3-bedroom apartment with yard.']},
        {creditType: 'Transportation', descriptionArray: ['Limited access to public transit.', 'Access to bikes and public transit.', 'Access to a car.']},
        {creditType: 'Utilities', descriptionArray: ['Electricity. Unreliable heating, A/C, and hot water. No wifi.', 'Electricity. Heating. A/C unit in main bedroom. Limited hot water. Slow wifi.', 'Electricity. Heating. Central A/C. Hot water. High-speed internet.']},
        {creditType: 'Education', descriptionArray: ['Public school for first grader. No day care for youngest.','Public school for first grader. Morning pre-k for youngest.','Public school for first grader. All-day pre-k for youngest.']},
        {creditType: 'Health Care', descriptionArray: ['No insurance.','One adult and both children are covered.','Whole family is covered.']},
        {creditType: 'Food', descriptionArray: ['Your family reliably gets 2 meals a day with limited access to fresh produce.','Your family gets 3 meals a day some days of the week. You have limited access to fresh produce.','Your entire family gets 3 healthy meals a day.']},
    ]

    const resourceList = resourcesData.map((resourceObject, i)=> {
        return <Resource dataObject={resourceObject} numCredits={credits} setCredits={setCredits} key={i}/>
    });

    const secondaryDescription = creditsFromLastMonth==1 ? 'Select the number of credits to spend in each category. Your family has an income of 10 credits this month and 1 credit of savings.' : `Your family has an income of 10 credits this month and ${creditsFromLastMonth} credits of savings.`;


    return (
        <main className="flex flex-col">
            <h1 className='simulationTitle'>Month 2</h1>
            <h2 className='simulationDescription'>{secondaryDescription}</h2>
            <div className='savingsContainer'>
                <div className='savingsTopRow'>
                    <h2 className='savingsNumber'>Savings: {credits}</h2>
                    <div className='savingsBarContainer'>
                        <div className='savingsBackgroundBar' style={{width:'475px'}} >
                            <div className='savingsForegroundBar' style={{width: `${credits*475/(4+Number(creditsFromLastMonth))}px`}} />
                        </div>
                    </div>
                </div>
                <div className='savingsBottomRow'>
                    <div className="savingsBottomRowSpacer"/>
                    <h2 className="savingsDescription">These credits will carry over to next month.</h2>
                </div>
            </div>
            <div className='resourcesContainer'>
                {resourceList}
            </div>
            <div className='nextButtonContainer'>
                <Link href={{pathname: '/simulation3IntroPage', query: {creditsFromLastMonth:credits}}}><h2 className='openingButton' >Next month</h2></Link>
            </div>
        </main>
        
    )
}