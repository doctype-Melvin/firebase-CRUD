import React, {useState} from "react";

export default function DataEntry() {

    const [data, setData] = useState([])

    return (
    <div className="formContainer">
        <label htmlFor="field1">Field 1: <input type="text"/></label>
        <label htmlFor="field2">Field 2: <input type="text"/></label>
        <label htmlFor="field3">Field 3: <input type="text"/></label>
        <button type="button">Send</button>
    </div>
    )
}