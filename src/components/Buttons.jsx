import React from "react";

export default function Buttons(props) {

    const createData = () => {
        props.setEntry(prevState => !prevState)
        if (props.render) props.setRender(prevState => !prevState)
    }

    const renderData = () => {
        console.log(props.dataArray)
        props.setRender(prevState => !prevState)
        if (props.entry) props.setEntry(prevState => !prevState)
    }

    

    return (
        <>
        <div className="buttonControl">
            <button 
            type="button"
            id="create"
            onClick={createData}>
            Create
            </button>
            <button 
            type="button"
            id="render"
            onClick={renderData}
            >
            Render
            </button>
        </div>
        </>
    )
}