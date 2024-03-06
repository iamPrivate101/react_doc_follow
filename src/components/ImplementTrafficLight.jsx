import { useState } from "react"

const ImplementTrafficLight = () => {

    const[walk, setWalk] = useState(true);

    function handleClick(){
        setWalk(!walk);
        alert(walk ? 'next is Stop': 'next is walk' );
    }


  return (
    <>
        <button onClick={handleClick} >Change to {walk ? 'Walk' : 'Stop'} </button>
        <h1 style={{color : walk ? 'darkgreen' : 'darkred'}} >
            {walk ? 'Walk' : 'Stop'}
        </h1>
    </>
  )
}

export default ImplementTrafficLight
