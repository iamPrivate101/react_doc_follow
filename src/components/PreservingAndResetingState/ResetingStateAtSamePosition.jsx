import { useState } from "react";

export default function ResetingStateAtSamePosition() {
    const [isPlayerA, setIsPlayerA] = useState(true);
  return (
  <>
    {isPlayerA ? (
        <Counter person="User 1" />
    ): (
        <Counter person="User 2" />
    ) }
    
    <button onClick={() => setIsPlayerA(!isPlayerA)}>Next Person</button>
  
  </>
  )
}

function Counter({person}){
    const [score, setScore] = useState(0);
    return(
        <>
        <div>
            <h2>{person}'s score: {score}</h2>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
        </>
    );
}
