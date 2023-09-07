'use client'
import { useState } from "react";
import NextDescription from './nextDescription'

export default function Resource({dataObject, numCredits, setCredits}) {

    const [resourceCredits, setResourceCredits] = useState(1);
    const color = resourceCredits===1 ? '#CF202A' : (resourceCredits===2 ? '#FFD700' : '#4E9B47')
    const nextColor = resourceCredits===1 ? '#FFD700' : '#4E9B47';
    const {creditType, descriptionArray} = dataObject;

    const [viewNextDescription, setViewNextDescription] = useState(undefined);

    const buttonAddClass = resourceCredits === 3 || numCredits === 0? 'buttonDisabled' : 'button'
    const buttonSubtractClass = resourceCredits === 1 ? 'buttonDisabled' : 'button'

    const buttonAddFill = resourceCredits === 3 || numCredits === 0? 'rgb(211, 211, 211)' : 'blue'
    const buttonSubtractFill = resourceCredits === 1 ? 'rgb(211, 211, 211)' : 'blue'
    
    return (
        <div className='resourceContainer' style={{borderColor: color}}>
            <div className='labelContainer'>
                <h2 className='resourceName'>{creditType}:</h2>
            </div>
            <div className='buttonsContainer'>
                <button className={`subtract ${buttonSubtractClass}`}
                    onClick={() => {
                        if(resourceCredits>1){
                            setResourceCredits(resourceCredits-1);
                            setCredits(numCredits+1);
                        }
                    }}>
                    <svg viewBox="0 0 1024 1024" fill={buttonSubtractFill} height="20px" width="20px">
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                    </svg>
                </button>
                <div className='resourceNumberContainer'>
                    <h2 className='resourceNumber'>{resourceCredits}</h2>
                </div>
                <button 
                    className={`add ${buttonAddClass}`}
                    onClick={() => {
                        if(resourceCredits<3 && numCredits>0){
                            setResourceCredits(resourceCredits+1);
                            setCredits(numCredits-1);
                        }
                    }}
                    onMouseEnter={e => {
                        if(numCredits===0 && resourceCredits<3){
                            console.log(descriptionArray[resourceCredits+1]);
                            setViewNextDescription(<NextDescription borderColor={nextColor} description={descriptionArray[resourceCredits+1]}/>)
                        }
                    }}
                    onMouseLeave={e => {
                        setViewNextDescription(undefined);
                    }}
                >
                    <svg viewBox="0 0 1024 1024" fill={buttonAddFill} height="20px" width="20px">
                        <defs>
                            <style />
                        </defs>
                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
                    </svg>
                </button>
                {viewNextDescription}
            </div>
            <div className='descriptionContainer'>
                <h2 className='resourceDescription'>{descriptionArray[resourceCredits]}</h2>
            </div>
        </div>
  )}
  