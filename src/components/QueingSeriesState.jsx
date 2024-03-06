import { useState } from "react"

const QueingSeriesState = () => {

    const [score, setScore] = useState(0);

    function increment(){
        // setScore(score+1);
        setScore(s => s+1);
    }

  return (
    <>
    <button onClick={ () => increment() }> +1</button>
    <button onClick={ () => {
        increment();
        increment();
        increment();
    } } >+3</button>

    <h3>Score: {score}</h3>
    </>
  )
}

export default QueingSeriesState
