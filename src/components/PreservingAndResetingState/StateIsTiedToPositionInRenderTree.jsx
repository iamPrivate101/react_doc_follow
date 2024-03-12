import { useState } from "react"

const StateIsTiedToPositionInRenderTree = () => {
    const [showB, setShowB] = useState(true);

  return (
    <>
        <Counter />
        {showB && <Counter/> }
        <label htmlFor="">
            <input type="checkbox" checked={showB} onChange={e => {setShowB(e.target.checked)}} />
            Render the second Counter
        </label>
    </>
  )
}

function Counter(){
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';

    if(hover){
        className += ' hover'; 
    }

    return (
        <>
        <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)} >Add One</button>
        </div>
        </>
    );
}

export default StateIsTiedToPositionInRenderTree
