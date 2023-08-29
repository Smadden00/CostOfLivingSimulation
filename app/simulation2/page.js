'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Resource from './resource';
import Link from 'next/link';


export default function FirstSimulation() {
    const [credits, setCredits]=useState(13);
    
    const searchParams = useSearchParams();
    const creditsFromLastMonth = searchParams.get('creditsFromLastMonth');

    useEffect( () => {
        setCredits(credits+Number(creditsFromLastMonth));
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center">
            <h1 className='simulationTitle'>Simulation 2</h1>
            <h2 className='simulationDescription'>The next month your spouse breaks their leg. You have fewer credits than last month.</h2>
            <div className='creditsContainer'>You have {credits} credits left to spend this month.</div>
            <div className='savingsContainer'>
                <div className='savingsTopRow'>
                    <h2 className='savingsNumber'>Savings: {credits}</h2>
                    <div className='savingsBarContainer'>
                        <div className='savingsForegroundBar' style={{width:`${credits*26.611}px`}} />
                    </div>
                </div>
                <div className='savingsBottomRow'>
                    <div className="savingsBottomRowSpacer"/>
                    <h2 className="savingsDescription">These credits will carry over to next month.</h2>
                </div>
            </div>
            <div className='resourcesContainer'>
                <Resource creditType='Food' numCredits={credits} setCredits={setCredits} />
                <Resource creditType='Shelter' numCredits={credits} setCredits={setCredits} />
                <Resource creditType='Water' numCredits={credits} setCredits={setCredits} />
            </div>
            <Link href={{pathname: '/simulation2', query: credits}}><h2 className='openingButton nextButton' >Next month</h2></Link>
        </main>
        
    )
}