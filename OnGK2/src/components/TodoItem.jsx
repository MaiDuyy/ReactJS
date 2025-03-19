import { useState, useRef, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

export default function TodoItem({ todo }) {
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() && editText !== todo.text) {
      dispatch({
        type: 'UPDATE_TODO',
        payload: { id: todo.id, text: editText.trim() }
      });
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      {isEditing ? (
        <div className="flex-1 flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 text-sm text-green-500 hover:text-green-700 focus:outline-none"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditText(todo.text);
              setIsEditing(false);
            }}
            className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            onClick={handleToggle}
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="px-3 py-1 text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-1 text-sm text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
} 