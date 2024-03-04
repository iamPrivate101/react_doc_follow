import { useState } from "react"

const StateSnap = () => {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(()=> {
            alert(`you have sent ${message} to ${to}`);

        }, 1000
        );
    }

  return (
    <>
    <form onSubmit={handleSubmit} action="">
        <select value={to} name="" id="" onChange={e => setTo(e.target.value)}>To 
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        </select>

        <input type="textarea" value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default StateSnap
