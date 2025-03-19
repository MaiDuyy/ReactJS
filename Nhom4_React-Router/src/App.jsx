import React, { useState, useEffect, useRef, useMemo, useReducer } from 'react';
import { Button } from "@/components/ui/button";
import toReducer from './pages/toReducer';

function App() {
  const [todos, dispatch] = useReducer(toReducer, []);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'SET', payload: storedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return {
      incomplete: todos.filter(todo => !todo.completed),
      completed: todos.filter(todo => todo.completed),
    };
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    dispatch({ type: 'ADD', payload: newTodo });
    setInputValue('');
    inputRef.current.focus();
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleAddTodo} className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          className="border p-2 flex-grow"
          placeholder="Add a new todo"
        />
        <Button type="submit" className="ml-2">
          Add Todo
        </Button>
      </form>
      <div>
        <h2 className="text-xl font-semibold">Incomplete Todos</h2>
        <ul>
          {filteredTodos.incomplete.map(todo => (
            <li key={todo.id} className="flex items-center justify-between p-2 border-b">
              <span
                onClick={() => handleToggleTodo(todo.id)}
                className="cursor-pointer"
              >
                {todo.text}
              </span>
              <Button onClick={() => handleDeleteTodo(todo.id)} className="bg-red-500">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4">Completed Todos</h2>
        <ul>
          {filteredTodos.completed.map(todo => (
            <li key={todo.id} className="flex items-center justify-between p-2 border-b">
              <span
                onClick={() => handleToggleTodo(todo.id)}
                className="cursor-pointer line-through"
              >
                {todo.text}
              </span>
              <Button onClick={() => handleDeleteTodo(todo.id)} className="bg-red-500">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;