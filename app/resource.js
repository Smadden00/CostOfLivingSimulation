'use client'
import { useState } from "react";
import styles from "./groupSimulation1/groupSimulation1.module.css";


export default function Resource({dataObject, numCredits, setCredits}) {

    const [resourceCredits, setResourceCredits] = useState(0);
    const color = resourceCredits===1 ? '#CF202A' : (resourceCredits===2 ? '#FFD700' : (resourceCredits===3 ?'#4E9B47': '#000000'));
    const {creditType, descriptionArray} = dataObject;
        
    const inputs = descriptionArray.map((description, i) => {
        const resourceNum = i+1;
        return (
            <label key={i}>
                <input 
                    type="radio" 
                    name={creditType} 
                    checked={resourceCredits==resourceNum} 
                    onChange={()=>{
                        if (resourceNum-resourceCredits <= numCredits) {
                            setCredits(numCredits+resourceCredits-resourceNum);
                            setResourceCredits(resourceNum);
                        }
                    }}
                    disabled={resourceNum-resourceCredits <= numCredits ? false : true}
                />{resourceNum}c: {description}
            </label>
        )
    });

    return (
        <div className={`resourceContainer ${styles.resourceContainer}`} style={{borderColor: color}}>
            <div className={styles.resourceTitleContainer}>
                <h2 className='resourceName'>{creditType}:</h2>
            </div>
            {inputs}
        </div>
  )}
  