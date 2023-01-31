import React from "react";
import { useEffect, useState } from "react";
import { doc, updateDoc, collection, getFirestore, getDocs } from "firebase/firestore"

export default function Presentation(props) {
    const [ dbData, setDbData ] = useState([])
    
       
    useEffect(() => { // Effect fetches data on render and sets state
       const fetchData = async () => {
        const data = await props.getFromDB()
        setDbData(data)
       }
       fetchData()
    }, [])

    return (
        <div className="dataRender">
            {/* {dbData.length ? mapper : 'Loading...'} */}
            {dbData.map(x => {
            return (
                
                <div key={x.id} className="infoCard" data-id={x.id}>
                    <div className="line1">{x.input1}</div>
                    <div className="line2">{x.input2}</div>
                    <div className="line3">{x.input3}</div>
                    <button data-id={x.id} onClick={(e) => console.log(e.target.dataset.id)}>Edit</button>
                    <button>Delete</button>
                </div> 
                
                )
            })}
        </div>
    )
}
