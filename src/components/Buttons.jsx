import React from "react";

export default function Buttons(props) {
    const createData = () => {
        props.setWrite(prev => !prev)
    }

    const renderData = () => {
        console.log('Show data!')
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