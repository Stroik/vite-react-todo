import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { DUMMY_TODOS } from "./dummy";

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const onToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const onRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onAdd = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, done: false });
    setTodos(newTodos);
  };

  return (
    <div className="content">
      <h1>ToDo List</h1>
      <TodoList items={todos} onRemove={onRemove} onToggle={onToggle} />
      <NewTodo onAdd={onAdd} />
    </div>
  );
}

export default App;
