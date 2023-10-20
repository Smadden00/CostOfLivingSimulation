'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

export default function SimulationIntroPage() {

    const searchParams = useSearchParams();
    const creditsFromLastMonth = parseInt(searchParams.get('creditsFromLastMonth'));


  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 style={{fontSize:'xx-large'}}>Month 2: Scarcity</h1>
      <h2>This month, your spouse had their work hours cut from 40 to 20. This reduces your monthly household income to 10 credits.</h2>
      <h2>Savings from previous month: {creditsFromLastMonth}</h2>
      <h2>Total budget this month: {creditsFromLastMonth+10}</h2>
      <Link href={{pathname: '/groupSimulation2', query: {creditsFromLastMonth}}}><h2 className='openingButton'>Continue</h2></Link>
    </main>
  )
}