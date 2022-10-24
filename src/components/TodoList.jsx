import TodoItem from "./TodoItem";

export default function TodoList({ items, onToggle, onRemove }) {
  return (
    <ul className="todo-list">
      {items.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          onToggle={() => onToggle(index)}
          onRemove={() => onRemove(index)}
        />
      ))}
    </ul>
  );
}
