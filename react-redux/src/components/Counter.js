import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset, restar, restar5, sumar, sumar5 } from '../actions/counterActions'

const Counter = () => {
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Counter</h2>
            <button onClick={()=>dispatch(sumar5())}>+ 5</button>
            <button onClick={()=>dispatch(sumar())}>+ 1</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(restar())}>- 1</button>
            <button onClick={()=>dispatch(restar5())}>- 5</button>
            <h3>{state.counter}</h3>
        </div>
    )
}

export default Counter
