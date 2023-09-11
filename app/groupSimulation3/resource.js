'use client'
import { useState } from "react";
import styles from "./groupSimulation3.module.css";


export default function Resource({dataObject, numCredits, setCredits}) {

    const [resourceCredits, setResourceCredits] = useState(1);
    const color = resourceCredits===1 ? '#CF202A' : (resourceCredits===2 ? '#FFD700' : '#4E9B47')
    const {creditType, descriptionArray} = dataObject;
        
    console.log(resourceCredits);

    return (
        <div className={`resourceContainer ${styles.resourceContainer}`} style={{borderColor: color}}>
            <div className={styles.resourceTitleContainer}>
                <h2 className='resourceName'>{creditType}:</h2>
            </div>
            <label>
                <input 
                    type="radio" 
                    name={creditType} 
                    checked={resourceCredits==1} 
                    onChange={()=>{
                        if (1-resourceCredits <= numCredits) {
                            setCredits(numCredits+resourceCredits-1);
                            setResourceCredits(1);
                        }
                    }}
                /> {descriptionArray[0]}
            </label>
            <label>
                <input 
                    type="radio" 
                    name={creditType} 
                    checked={resourceCredits==2} 
                    onChange={()=>{
                        if (2-resourceCredits <= numCredits) {
                            setCredits(numCredits+resourceCredits-2);
                            setResourceCredits(2);
                        }
                    }} 
                    disabled={2-resourceCredits <= numCredits ? false : true}
                /> {descriptionArray[1]}
            </label>
            <label>
                <input 
                    type="radio" 
                    name={creditType} 
                    checked={resourceCredits==3} 
                    onChange={()=>{
                        if (3-resourceCredits <= numCredits) {
                            setCredits(numCredits+resourceCredits-3);
                            setResourceCredits(3);
                        }
                    }} 
                    disabled={3-resourceCredits <= numCredits ? false : true}
                /> {descriptionArray[2]}
            </label>
        </div>
  )}
  