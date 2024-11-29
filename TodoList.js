//src/TodoList.js
import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
        text: 'Meet friend for lunch',
        isCompleted: false
      },
      {
        text: 'Build really cool todo app',
        isCompleted: false
      }
    ]);
  
    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };
  
    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    );
  };
  
  export default TodoList;
  