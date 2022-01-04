import React, {memo, useMemo} from 'react'

const ChildCounter = ({counter, add, substract}) => {
    console.log("The child counter is rendered")

    /*let number = 0;
    for (let i = 0; i < 100000000; i++) {
        number++
    }*/
    const useMemoNumber = useMemo(() => {
        let number = 0;
        for (let i = 0; i < 100000000; i++) {
            number++
        }
        return number
    }
    , [])
    //useMemo sirve para memorizar solamente el valor de la funcion. Para memorizar la funcion completa esta useCallback



    return (
        <div style={{border: "thin solid black", margin:"1rem", padding:"1rem"}}>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <h3>Child Counter {counter}</h3>
            <h4>{useMemoNumber}</h4>
        </div>
    )
}

//memo sirve para que el componente hijo no se renderice cada vez que el padre lo hace, pero cuando el estado particular del hijo cambia, este ser renderiza

//cuando le pasamos 
export default memo(ChildCounter)
