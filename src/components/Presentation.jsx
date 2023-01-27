import React from "react";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore"
import { updaterMethod } from "../App";

export default function Presentation(props) {
    const [ dbData, setDbData ] = useState([])
    const [ update, setUpdate ] = useState(false)
    const [ obj, setObj] = useState([])

    useEffect(() => { // Effect fetches data on render and sets state
       const fetchData = async () => {
        const data = await props.getFromDB()
        setDbData(data)
       }
       fetchData()
    }, [])


    // Function looks through dbData to find selected obj
    // Toggles update state
    // Next: Update the desired obj from UI
    // Send updated data to DB
    const updateCard = (e) => {
        setUpdate(prev => !prev)
        if (update) {
            const finder = dbData.find(item => item.id === e.target.dataset.id)
            setObj(finder)
            setUpdate(prev => !prev)
        }
    }

    const mapper = dbData.map(item => {
    return (
    <div key={item.id} className="infoCard">
        {/* Conditional render of div or input field */}
        {/* Input field sets placeholder to current data value */}
        {update ? <input type="text" placeholder={item.input1} /> : <div className="line1">{item.input1}</div>}
        <div className="line2">{item.input2}</div>
        <div className="line3">{item.input3}</div>
        <button 
        type="button"
        data-id={item.id} 
        onClick={() => setUpdate(prev => !prev)}>
            {/* Conditional render of button text */}
        { update ? "Save" : "Update"}
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