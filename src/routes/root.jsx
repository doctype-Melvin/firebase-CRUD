import Buttons from "../components/Buttons"
import DataEntry from "../components/Form"
import Header from "../components/Header"
import React, {useState} from "react"

export default function Root() {

    const [entry, setEntry] = useState(false) // Create 

    return (
        <div id="main">
            <div id="header">
                <Header />
            </div>
            <div id="sidebar">
                <Buttons 
                setEntry={setEntry}
                />
            </div>
            <div id="content">
                {entry ? <DataEntry /> : null}
            </div>
            <div id="footer">footer</div>
        </div>
    )
}