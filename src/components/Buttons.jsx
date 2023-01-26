import React from "react";

export default function Buttons(props) {
    const createData = () => {
        props.setWrite(prev => !prev)
        props.get ? props.setGet(prev => !prev) : null
    }

    const renderData = () => {
        //  props.getFromDB()
        props.setGet(prev => !prev)
        props.write ? props.setWrite(prev => !prev) : null
    }

    return (
        <div className="buttons">
            <button 
            type="button"
            onClick={createData}
            >Create
            </button>
            <button 
            type="button"
            onClick={renderData}
            >Show</button>
        </div>
    )
}