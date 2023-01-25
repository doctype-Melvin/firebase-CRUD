import Buttons from "../components/Buttons"
import Form from "../components/Form"
import Header from "../components/Header"
import React, {useState} from "react"
import Entry from "../components/Entry"

export default function Root() {

    const [ dataArray, setDataArray ] = useState([])

    const [ entry, setEntry ] = useState(false) // Create entry
    const [ render, setRender ] = useState(false) // Render entries

    const mapper = dataArray.map(item => <Entry
        key={item.id}
        field1={item.field1}
        field2={item.field2}
        field3={item.field3}
        />)
    console.log(mapper)
    return (
        <div id="main">
            <div id="header">
                <Header />
            </div>
            <div id="sidebar">
                <Buttons 
                entry={entry}
                setEntry={setEntry}
                dataArray={dataArray}
                render={render}
                setRender={setRender}
                />
            </div>
            <div id="content">
                {entry ? <Form setDataArray={setDataArray} /> : null}
                {render ? mapper : null}
            </div>
            <div id="footer">footer</div>
        </div>
    )
}