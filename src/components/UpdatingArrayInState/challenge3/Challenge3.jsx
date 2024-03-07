import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 3;

const initialList = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];



const Challenge3 = () => {
    const [todos, setTodos] = useState(initialList);

    function handleAddTodo(title){
      if(title.trim() !== ""){
        setTodos([
            ...todos, {id:nextId++, title:title, done:false}
        ]);
      } else{
        alert("Empty Text");
      }
    }

    function handleChangeTodo(nextTodo){
      setTodos(todos.map(t => {
        if(t.id === nextTodo.id){
          return nextTodo;
        }else{
          return t;
        }
      }));
    }

    function handleDeleteTodo(todoID){
      setTodos(todos.filter(t => t.id !== todoID));
    }

    function handleDeleteComplete(){
      setTodos(todos.filter(t => t.done !== true));
    }

    // console.log(todos);

  return (
    <>
    <AddTodo onAddTodo={handleAddTodo} onDeleteComplete={handleDeleteComplete} />
    <TaskList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
    </>
  )
}

export default Challenge3;
