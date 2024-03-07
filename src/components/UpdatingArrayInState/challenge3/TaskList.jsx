import { useState } from "react";

const TaskList = ({todos, onChangeTodo , onDeleteTodo}) => {
  return (
    <>
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
            </li>
        ))}
    </ul>
  
    </>
  )
}

export default TaskList;

function Task({todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;
    let strike;
    if(isEditing){
        todoContent = (
            <>
            <input type="text" value={todo.title} onChange={e => {
                onChange({
                    ...todo,
                    title: e.target.value
                });
            }} />
            <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );

    }else{

        

        todo.done === true ? strike = { textDecoration: 'line-through' } : strike = { textDecoration: 'none' };

        console.log(strike)
        
       
        todoContent = (
            <>
            <label style={strike}>
                {todo.title}
            <button onClick={() => setIsEditing(true)} >Edit</button>
            </label>
            </>
        );
    }
    

    return (
        <>
        <label htmlFor="">
            <input type="checkbox" checked={todo.done} onChange={e => {
                onChange({
                    ...todo, done:e.target.checked
                });
            }}  />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
        </>
    );

}
