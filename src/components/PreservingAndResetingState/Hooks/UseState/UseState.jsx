 import {useState} from 'react'

 function countInitial() {
    console.log("initial function");
    return 4;
 }

export default function UseState() {

    //Multiple ways to define use state

    //First
    // const [count,setCount] = useState(countInitial());

    //Second
    // const [count,setCount] = useState(4);

    //Third
    // alternative only runs first time -> use this method
    const [count, setCount] = useState(() => {
        console.log("run function");
        return 4;
    });

    //now using object in state
    const [ state, setState] = useState({number:4, theme:"blue"});
    // const number = state.number;
    // const theme = state.theme;

    // function handleDecrement(){
    //     setCount(prevCount => prevCount -1);
    // }

    function handleIncrement(){
        setCount(prevCount => prevCount + 1);
        console.log(count);
    }

    function handleObjectIncrement(){
        setState(prevState => {
            return {...prevState,  number : prevState.number +1};
        });
    }

    function handleObjectDecrement(){
        setState(prevState => {
            return {...prevState, number: prevState.number - 1};
        } )
    }

  return (
    <>
    <button onClick={() => setCount(prevCount => prevCount -1)}>-</button>
    <span>{count} </span>
    <button onClick={handleIncrement}>+</button>

    <hr />

    <button onClick={handleObjectIncrement}>+</button>
    <span>{state.number} {state.theme}</span>
    <button onClick={handleObjectDecrement}>-</button>
    </>
  )
}
