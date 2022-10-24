export default function TodoItem({ todo, index, onToggle, onRemove }) {
  const { text, done } = todo;
  return (
    <li className="animate__animated animate__bounceIn">
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
        onClick={() => onToggle(index)}
      >
        {text}
      </span>
      <button onClick={() => onRemove(index)}>
        <span>X</span>
      </button>
    </li>
  );
}
