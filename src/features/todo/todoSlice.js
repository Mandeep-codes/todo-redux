import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: "abc", task: "demo", done: false }], // Changed to 'done' for consistency
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                done: false, // Changed to 'done'
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleDone: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.done = !todo.done; // Toggle between true/false
            }
        },
        // Removed redundant markAsDOne since toggleDone handles this
    },
});

// Export all action creators
export const { addTodo, deleteTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;