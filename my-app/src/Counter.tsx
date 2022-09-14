import React, { ChangeEvent, useState } from 'react'

type CounterProps = {
    incident: string
}

const inc = (count:number) => count +1
const dec = (count:number) => count -1

const Counter = ({incident}:CounterProps) => {
    const [count,setCount] = useState(0)
    const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
        setCount(+event.target.value)
    }
    return (
        <main className="Counter">
          <h1>Days Since Last {incident}</h1>
          <p className="count">{count}</p>
          <section className="controls">
            <button onClick={() => setCount(inc)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(dec)}>Decrement</button>
          </section>
          <section className="controls">
            <form onSubmit={() => {}}>
              <label htmlFor="set-to">Set Count</label>
              <input onChange={changeCount} value={count} id="set-to" type="number" />
              <input onChange={(e) => setCount(+e.target.value)} value={count} id="set-to" type="number" />
              <input type="submit" />
            </form>
          </section>
        </main>
    );
};


export default Counter