import React from "react";

export default function Buttons(props) {

    const createData = () => {
        props.setEntry(prevState => !prevState)
    }

    const renderData = () => {
        console.log('Render')
    }

    const updateData = () => {
        console.log('Update')
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