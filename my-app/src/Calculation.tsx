import React from 'react'

const Calculation = ({count} : {count:any}) =>{
  return (
    <section className="calculation">
      <p className="count">{count}</p>
      <p className="caption">Pizza Needed</p>
    </section>
  )
}

export default Calculation