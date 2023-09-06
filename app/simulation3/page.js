'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Resource from './resource';
import Link from 'next/link';


export default function FirstSimulation() {
    const [credits, setCredits]=useState(8);
    
    const searchParams = useSearchParams();
    const creditsFromLastMonth = searchParams.get('creditsFromLastMonth');

    useEffect( () => {
        setCredits(credits+Number(creditsFromLastMonth));
    }, []);

    const resourcesData=[
        {creditType: 'Housing', descriptionArray: ['You have no housing.', 'You have a small 1-bedroom apartment with no yard.', 'You have a 2-bedroom apartment with a small yard.', 'You have a 3-bedroom house with a spacious yard.']},
        {creditType: 'Transportation', descriptionArray: ['You have no access to transportation.', 'You have limited access to public transit.', 'You have access to bikes and public transit.', 'You have access to a car.']},
        {creditType: 'Utilities', descriptionArray: ['You have no electric, heating, A/C, hot water, or wifi.', 'You have electric and unrelieble heating. You have no hot water, A/C, or wifi.', 'You have electric, heating, low speed wifi, and unreliable hot water. You have no A/C.', 'You have electric, heating, A/C, hot water, and high speed wifi.']},
        {creditType: 'Education', descriptionArray: ['Your children have no education.', 'Your first grader goes to public school, but you have no day care for your youngest.','Your first grader goes to public school, and you have morning pre-k for your youngest.','Your first grader goes to public school, and you have all day pre-k for your youngest.']},
        {creditType: 'Health Care', descriptionArray: ['Your family has no health care coverage.','Your children have health care coverage with a very high deductible.','Your children and one parent has health care coverage.','Everyone in your family has health care coverage.']},
        {creditType: 'Food', descriptionArray: ['Your family struggles to get any food each day.','Your family reliably gets 2 meals a day with limited access to fresh produce.','Your family gets 3 meals a day most days of the week. You have limited access to fresh produce.','Your entire family gets 3 health meals a day.']},
    ]

    const resourceList = resourcesData.map((resourceObject, i)=> {
        return <Resource dataObject={resourceObject} numCredits={credits} setCredits={setCredits} key={i}/>
    });

    const secondaryDescription = creditsFromLastMonth==1 ? 'Your family has an income of 14 credits this month and 1 credit of savings.' : `Your family has an income of 14 credits this month and ${creditsFromLastMonth} credits of savings.`;

    return (
        <main className="flex min-h-screen flex-col">
            <h1 className='simulationTitle'>Month 3</h1>
            <h2 className='simulationDescription'>This month, your household applies for and receives FoodShare.</h2>
            <h2 className='simulationDescription'>{secondaryDescription}</h2>
            <div className='savingsContainer'>
                <div className='savingsTopRow'>
                    <h2 className='savingsNumber'>Savings: {credits}</h2>
                    <div className='savingsBarContainer'>
                        <div className='savingsForegroundBar' style={{width:`${credits*475/(8+Number(creditsFromLastMonth))}px`}} />
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
                <Link href={{pathname: '/endOfSimulation'}}><h2 className='openingButton' >Next month</h2></Link>
            </div>
        </main>
        
    )
}