import React from "react";

export default function Entry(props) {
    const updateData = (e) => {
        console.log(e.target.dataset)
        
    }

    const deleteData = () => {
        console.log('Delete')
    }
    console.log(props)
    return (
        <>
            <div className="entry">
                <div>{props.field1}</div>
                <div>{props.field2}</div>
                <div>{props.field3}</div>
                <div className="cardBtns" 
                >
                <button 
                data-id={props.id} 
                data-array-pos={props.pos}
                type="button"
                onClick={updateData}
                >Update</button>
                <button
                type="button"
                data-id={props.id} 
                data-array-pos={props.pos}
                >Delete</button>
                </div>
            </div>
        </>
    )
}