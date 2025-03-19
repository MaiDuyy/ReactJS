import { TodoProvider } from './context/TodoContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Todo List App</h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
