import React from "react";
import { useEffect, useState } from "react";

export default function Presentation(props) {
    const [ dbData, setDbData ] = useState([])

    useEffect(() => {
       const fetchData = async () => {
        const data = await props.getFromDB()
        console.log(data)
        setDbData(data)
       }
       fetchData()
    }, [])

    const mapper = dbData.map(item => {
    return (
    <div key={item.id} className="infoCard">
        <div className="line1">{item.input1}</div>
        <div className="line2">{item.input2}</div>
        <div className="line3">{item.input3}</div>
        <button type="button">Update</button>
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