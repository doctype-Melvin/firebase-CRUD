import React from "react";

export default function Card(props) {
    const getId = (e) => {
        console.log(e.target.dataset.id)
    }
    return (
        <div className="infoCard" data-id={props.id}>
            <div className="line1">{props.line1}</div>
            <div className="line2">{props.line2}</div>
            <div className="line3">{props.line3}</div>
            <button className="editBtn" data-id={props.id} onClick={getId}>Edit</button>
            <button className="deleteBtn" >Delete</button>
        </div>
    )
}