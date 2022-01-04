import React from 'react'

export const CRUDTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name, id, line} = el;
    return (
        <>
            <tr key={id}>
                <td>{name}</td>
                <td>{line}</td>
                <td>
                    <button onClick={() => setDataToEdit(el)}>Edit</button>
                    <button onClick={() => deleteData(id, name)}>Delete</button>
                </td>
            </tr>
        </>
    )
}
