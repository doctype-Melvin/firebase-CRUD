import React from "react";
import { useEffect, useState } from "react";

export default function Presentation(props) {
    const [ dbData, setDbData ] = useState([])

    useEffect(() => { // Effect fetches data on render and sets state
       const fetchData = async () => {
        const data = await props.getFromDB()
        setDbData(data)
       }
       fetchData()
    }, [])

    const updateCard = (e) => console.log(e.target.dataset)

    const mapper = dbData.map(item => {
    return (
    <div key={item.id} className="infoCard">
        <div className="line1">{item.input1}</div>
        <div className="line2">{item.input2}</div>
        <div className="line3">{item.input3}</div>
        <button 
        type="button"
        data-id={item.id} 
        onClick={updateCard}>
            Update
        </button>
        <button type="button" className="deleteBtn">Delete</button>
    </div>
    )
})
    return (
        <div className="dataRender">
            {dbData.length ? mapper : 'Loading...'}
        </div>
    )
}