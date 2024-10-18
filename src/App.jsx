import { useSelector } from 'react-redux'
import './App.css'
import TodoInput from './components/TodoInputs.jsx'
import TodoList from './components/TodoList.jsx';

function App() {

  const todos = useSelector(state => state.todoState.todos);

  return (
    <>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App