import React, { useState } from "react";

export default function Card(props) {

    const [ isEdit, setIsEdit ] = useState(null)
    const [ newData, setNewData ] = useState({})

    const handleEdit = (id) => {
        setIsEdit(id)
        setNewData(() => props.data.find(item => item.id === id))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewData((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSave = () => {
        setIsEdit(null)
        props.update(newData)
    }

    const handleDelete = (id) => {
        props.delete(id)
    }
    
    return (

       isEdit === props.id ? (
        <div className="infoCard" data-id={props.id}>
            <input type="text" name="input1" placeholder={props.line1} onChange={handleChange}/>
            <input type="text" name="input2" placeholder={props.line2} onChange={handleChange}/>
            <input type="text" name="input3" placeholder={props.line3} onChange={handleChange}/>
            <button className="saveBtn" onClick={handleSave}>Save</button>
        </div>
       ) : (
        <div className="infoCard" data-id={props.id}>
            <div className="line1">{props.line1}</div>
            <div className="line2">{props.line2}</div>
            <div className="line3">{props.line3}</div>
            <button className="editBtn" data-id={props.id} onClick={() => handleEdit(props.id)}>Edit</button>
            <button className="deleteBtn" data-id={props.id} onClick={(e) => handleDelete(e.target.dataset.id)}>Delete</button>
        </div>
        ) 
        
    )
}