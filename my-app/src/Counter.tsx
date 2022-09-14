import React, { ChangeEvent, Component } from 'react';

type CounterProps = {
    incident: string;

}
type CounterState = {
    count: number;
}

export class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0
    }
    increment = () => {
        this.setState(({count}) => ({count: count + 1}))
    }
    decrement = () => {
        this.setState(({count}) => ({count: count - 1}))
    }
    reset = () => {
        this.setState({count:0});
    }
    changeCount = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({count: +e.target.value})
    }
  render() {
    const { incident } = this.props
    const { count } = this.state
    return (
      <main className='Counter'>
        <h1>Days Since Last {incident}</h1>
        <p className='count'>{count}</p>
        <section className="controls">
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.decrement}>Decrement</button>
        </section>
        <form>
            <label htmlFor="set-to">Set Count</label>
            <input onChange={this.changeCount} type="number" id="set-to" value={count}/>
            <input type="submit" />
        </form>
      </main>
    )
  }
}

export default Counter