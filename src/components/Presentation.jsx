import React from "react";
import { useEffect, useState } from "react";
import { doc, updateDoc, collection, getFirestore, getDocs } from "firebase/firestore"
import Card from "./Cards";

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
            {
                dbData.map(x => {
                    return (
                        <Card
                        key={x.id}
                        id={x.id}
                        line1={x.input1}
                        line2={x.input2}
                        line3={x.input3}
                    />)
                })
            }
        
        
        </div>
    )
}
