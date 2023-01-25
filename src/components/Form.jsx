import { nanoid } from "nanoid";
import React, {useState} from "react";

export default function Form(props) {

    const [ data, setData ] = useState({
        field1: '',
        field2: '',
        field3: ''
    })

    const changeHandler = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData,
            [name]: value,
            id: nanoid()
        }))
    }
    
    const submitHandler = () => { // Send to database
        
        console.log(data)
        props.setDataArray(prevState => [...prevState, data])
    }

    return (
    <div className="formContainer">
        <label htmlFor="field1"
        
        >Field 1: 
        <input 
        type="text"
        onChange={changeHandler}
        value={data.field1}
        name="field1"
        /></label>
        <label htmlFor="field2"
        
        >Field 2: 
        <input 
        type="text"
        onChange={changeHandler}
        value={data.field2}
        name="field2"
        /></label>
        <label htmlFor="field3"
        
        >Field 3: 
        <input 
        type="text"
        onChange={changeHandler}
        value={data.field3}
        name="field3"
        /></label>
        <button 
        type="button"
        onClick={submitHandler}
        >Send</button>
    </div>
    )
}