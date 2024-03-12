import { useState } from "react"

const DifferentComponentAtSameREsetPositionState = () => {
    const [isPaused, setIsPaused] = useState(false);
  return (
   <>
    {isPaused ? 'see you later' : <Counter />}
    <label htmlFor="">
        <input type="checkbox" checked={isPaused} onChange={e => {setIsPaused(e.target.checked)}} />
        Take a break
    </label>
   </>
  )
}

function Counter(){
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'className';
    if(hover){
        className += ' hover';
    }
    return (
        <>
        <div className={className}>
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)} >ADD</button>

        </div>
        </>
    );
}

export default DifferentComponentAtSameREsetPositionState
