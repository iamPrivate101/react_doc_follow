import React, { useState } from 'react'
import CountLabel from './CountLabel';

export default function StoringInformationFromPreviousRender() {
  const [count, setCount] = useState(0);
  return (
    <>
    <button onClick={() => setCount(count +1)}>increment</button>
    <button onClick={() => setCount(count -1)}>decrement</button>
    <CountLabel count={count} />
    </>
  )
}
