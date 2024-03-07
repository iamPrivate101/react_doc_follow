import { useState } from "react"

const AddTodo = ({onAddTodo, onDeleteComplete }) => {
    const [title, setTitle] = useState('');
  return (
    <>
    <input type="text"  placeholder="Add Todo" value={title}  onChange={e => setTitle(e.target.value)}/>
    <button onClick={() => {
        setTitle('');
        onAddTodo(title);
    }}>Add</button>

    <button onClick={() => {
        onDeleteComplete();

    }} >Delete Complete</button>
    
    </>
  )
}

export default AddTodo;
