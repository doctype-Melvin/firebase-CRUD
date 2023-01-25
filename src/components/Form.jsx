import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Form(props) {

    const [ data, setData ] = useState({
        id: nanoid()
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setData(
            {
                ...data,
                [name]: value,
            }
            )
    }

    const submit = () => {
        props.toDb(data)
    }

    return (
        <div className="formCt">
            <form className="formEl">
                <label htmlFor="input1">First: 
                <input type="text" name="input1" onChange={changeHandler}></input>
                </label>
                <label htmlFor="input1">Second: 
                <input type="text" name="input2" onChange={changeHandler}></input>
                </label>
                <label htmlFor="input1">Third:
                <input type="text" name="input3" onChange={changeHandler}></input>
                </label>
                <button type="button" className="send" onClick={submit}>Send</button>
            </form>
        </div>
    )
}