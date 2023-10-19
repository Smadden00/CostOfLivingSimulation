'use client'
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

export default function SimulationIntroPage() {

  const searchParams = useSearchParams();
  const creditsFromLastMonth = parseInt(searchParams.get('creditsFromLastMonth'));

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 style={{fontSize:'xx-large'}}>Month 3: Applying for Benefits</h1>
      <h2>This month, you heard from a friend about FoodShare, so you applied and got approved for benefits. This increases your monthly income to 14 credits.</h2>
      <h2>Savings from previous month: {creditsFromLastMonth}</h2>
      <h2>Total budget this month: {creditsFromLastMonth+14}</h2>
      <Link href={{pathname: '/groupSimulation3', query: {creditsFromLastMonth}}}><h2 className='openingButton'>Continue</h2></Link>
    </main>
  )
}