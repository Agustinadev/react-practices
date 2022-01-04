import React, { useState, useEffect } from 'react';

const initialForm = {
    id:null,
    name:"",
    line:""

}

export const CRUDForm = ({createData, updateData, setDataToEdit, dataToEdit}) => {
    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => {
        setForm({
            //name: lo nuevo que haya escrito el usuario. (Así agarra los valores el form y con el useEffect de abajo)
            ...form, [e.target.name]: e.target.value
        })
    }

    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.line) {
            alert("Datos incompletos.")
            return;
        }
        
        if (form.id === null) {
            createData(form)
        } else {
            updateData(form)
        }
        handleReset()
    }
    
    const handleReset = (e) => {
        setForm(initialForm)
        setDataToEdit(null)
    }
    //efecto que le pasa al form los valores para imprimirlos
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
        
    }, [dataToEdit])

    return (
        <div>
            <h3>{dataToEdit === null ?"Add:" :"Edit:"}</h3>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" type="text" value={form.name} onChange={handleChange}></input>
                <input name="line" placeholder="Line" type="text" value={form.line} onChange={handleChange}></input>
                <input type="submit" value="Submit"/>
                <input type="reset" value="Reset" onChange={handleReset}/>
            </form>
        </div>
    )
}
