import { useState } from "react"

const StateOverTime = () => {
    const [number, setNumber] = useState(0);

  return (
    <>
    <h3>{number}</h3>
    <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
            alert(number);  // returns the previous state numer as the number holds the state
        },3000 )
    }} >+5</button>
    
    </>
  )
}

export default StateOverTime
