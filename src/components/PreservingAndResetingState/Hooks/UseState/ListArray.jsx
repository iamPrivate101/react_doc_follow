import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function ListArray() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title){
        if(title.length === 0){
            alert('test');
        }else{
            setTodos([
                ...todos,
                {
                    id:nextId++,
                    title: title,
                    done:false
                }
            ]);

        }
    }

    function handleChangeTodo(nextTodo){
        console.log(nextTodo);
        setTodos(
            todos.map(t => {
                if(t.id === nextTodo.id){
                    return nextTodo;
                }else{
                    return t;
                }
            })
        );

    }

    function handleDeleteTodo(todoId){
        setTodos(todos.filter(t => t.id !== todoId));
    }
    console.log(todos);

  return (
    <>
    <AddTodo onAddTodo = {handleAddTodo}/>
    <TaskList todos ={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
    </>
  )
}