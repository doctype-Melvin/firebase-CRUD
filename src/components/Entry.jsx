import React from "react";

export default function Entry({ field1, field2, field3 }) {
    return (
        <>
            <div className="entry">
                <div>{field1}</div>
                <div>{field2}</div>
                <div>{field3}</div>
            </div>
        </>
    )
}