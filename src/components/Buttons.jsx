import React from "react";

export default function Buttons() {
    return (
        <>
        <div className="buttonControl">
            <button 
            type="button"
            id="create">
            Create
            </button>
            <button 
            type="button"
            id="render"
            >
            Render
            </button>
            <button
            type="button"
            id="update"
            >
            Update
            </button>
            <button 
            type="delete"
            id="delete"
            >
            Delete
            </button>
        </div>
        </>
    )
}