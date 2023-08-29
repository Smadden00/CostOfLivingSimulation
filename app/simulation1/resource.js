'use client'
import { useState } from "react";

export default function Resource({creditType, numCredits, setCredits}) {

    const [resourceCredits, setResourceCredits] = useState(0);
    

    return (
        <div className='resourceContainer'>
            <div className='resourceDisplay'>
                <h2 className='resourceNumber'>{creditType}: {resourceCredits}</h2>
                <h2>This is a description of what it's like to have {resourceCredits} {creditType} credits.</h2>
            </div>
            <div className='dynamicDisplay'>
                <div className='buttonsContainer'>
                    <div className='button'
                    onClick={() => {
                        if(resourceCredits>0){
                            setResourceCredits(resourceCredits-1);
                            setCredits(numCredits+1);
                        }
                    }}>
                        <svg viewBox="0 0 1024 1024" fill="black" height="20px" width="20px">
                            <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                        </svg>
                    </div>
                    <div className='button' 
                    onClick={() => {
                        if(resourceCredits<3 && numCredits>0){
                            setResourceCredits(resourceCredits+1);
                            setCredits(numCredits-1);
                        }
                    }}>
                        <svg viewBox="0 0 1024 1024" fill="black" height="20px" width="20px">
                            <defs>
                                <style />
                            </defs>
                            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                        </svg>
                    </div>
                </div>
                <div className='barContainer'>
                    <div className='backgroundBar' />
                    <div className='foregroundBar' style={{width:`${resourceCredits*157}px`}} />
                </div>
            </div>
        </div>
  )}
  