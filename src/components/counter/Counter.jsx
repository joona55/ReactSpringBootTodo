import {useState} from 'react'
import CounterButton from './CounterButton'
import CounterResetButton from './CounterResetButton'
import './Counter.css'

export default function Counter() {
    
    //[0, f(ÇÔ¼ö)]
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by) {
        setCount(count + by)
    }
    
    function decrementCounterParentFunction(by) {
        setCount(count - by)
    }

    function CounterResetParentFunction() {
        setCount(0)
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} 
                incrementMethod={incrementCounterParentFunction} 
                decrementMethod={decrementCounterParentFunction}/>
            <CounterResetButton resetMethod={CounterResetParentFunction}/>
        </>
    )   
}

