import React, { useCallback, useState } from 'react'
import ChildCounter from './ChildCounter';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(null);

    /*Manera vieja: hay que memorizarlas para que el componente hijo no se renderice por haberle pasado otras funciones
    const add = () => {
        setCounter(counter + 1)
    }
    const substract = () => {
        setCounter(counter - 1)
    }*/

    //si no tienen la dependencia funcionan una vez, ya que guardan la referencia
    const add = useCallback(() => {setCounter(counter + 1)},[counter],)
    const substract = useCallback(() => {setCounter(counter - 1)},[counter],)


    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <div>
            <button onClick={add}>+</button>
            <button onClick={substract}>-</button>
            <h3>Counter {counter}</h3>

            <h4>Memo</h4>
            <ul>
                <li>is in charge of memorization a component</li>
                <li>Re-memorize it the moment his props change</li>
                <li>avoid re-renders</li>
                <li>avoit it as much as posible, so it could be play against</li>
                <li>
                    used it when:
                    <ul>
                    <li>We have a lot elements rendered in a list</li>
                    <li>we call data of APIs</li>
                    <li>A component becomes very heavy</li>
                    <li>performance alerts appear on the console</li>
                    </ul>
                </li>
            </ul>
            <h4>Use Callback</h4>
            <ul>
                <li>Memorize a function so as not to redefine it in each render</li>
                <li>Use it whenever a function is passed as a prop to a memorized component</li>
                <li>Use it whenever a function is passed as a param of an useEffect</li>
            </ul>
        <input type="text" onChange={handleInput}></input>
            <ChildCounter counter={counter} add={add} substract={substract}></ChildCounter>
        </div>
    )
}

export default Counter
