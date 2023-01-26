import React from "react";

export default function Presentation(props) {
    // Code accesses DB
    // Results in async code
    // Find out how to render cards with data from async functions
    let documents
    (async function() {
        documents = await props.getFromDB()
        let mapper = documents.map(item => <div>{item.id}</div>)
        console.log(mapper)
    })()
    
    return (
        <div className="dataRender">
        </div>
    )
}