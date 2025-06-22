import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, toggleDone } from "../features/todo/todoSlice";
import "./Todo.css"; 

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleDone = (id) => {
    dispatch(toggleDone(id));
  };

  return (
    <div className="todo-container">
      <AddForm />
      <h2 className="todo-title">Your Tasks</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleDone(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.task}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}