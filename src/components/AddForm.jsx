import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./Todo.css"

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (task.trim()) {  // Prevent adding empty tasks
            dispatch(addTodo(task));
            setTask("");  // Clear input after submission
        }
    };

    return (
        <form onSubmit={submitHandler} className="add-form">
            <input 
                type="text" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task..."
                className="task-input"
            />
            <button type="submit" className="add-btn">
                Add Task
            </button>
        </form>
    );
}