import React from "react";
import Entry from "./Entry";

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

    const updateData = () => {
        console.log(props.dataArray)
        
    }

    const deleteData = () => {
        console.log('Delete')
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
            <button
            type="button"
            id="update"
            onClick={updateData}
            >
            Update
            </button>
            <button 
            type="delete"
            id="delete"
            onClick={deleteData}
            >
            Delete
            </button>
        </div>
        </>
    )
}