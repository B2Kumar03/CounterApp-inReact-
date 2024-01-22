import { useState } from 'react'
function CounterComponent(){
    const [count, setCount] = useState(0)
    return (
        <>
        <div className='counter'><h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1 )}>Decrement</button></div>
        </>
    )
}
export default CounterComponent;