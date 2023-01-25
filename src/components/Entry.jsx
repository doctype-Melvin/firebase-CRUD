import React from "react";

export default function Entry(props) {
    console.log(props.field1)
    return (
        <>
            <div className="entry">
                <div>{props.field1}</div>
                <div>{props.field2}</div>
                <div>{props.field3}</div>
            </div>
        </>
    )
}