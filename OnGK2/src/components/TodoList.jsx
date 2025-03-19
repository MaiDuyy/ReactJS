import { useEffect, useMemo } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { state, dispatch } = useTodo();

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch({ type: 'SET_TODOS', payload: JSON.parse(savedTodos) });
    }
  }, [dispatch]);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  // Memoize filtered todos
  const { completedTodos, activeTodos } = useMemo(() => {
    const completed = state.todos.filter(todo => todo.completed);
    const active = state.todos.filter(todo => !todo.completed);
    return { completedTodos: completed, activeTodos: active };
  }, [state.todos]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Active Todos ({activeTodos.length})</h3>
        {activeTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Completed Todos ({completedTodos.length})</h3>
        {completedTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
} 