// This component is the main container for the Todo app. It manages state for tasks and renders child components.

import { useState } from "react";
import "./Todo.css"; // Importing styles for the Todo component
import TodoList from "./TodoList"; // Importing the TodoList component
import DateTime from "./DateTime"; // Importing the DateTime component
import { TodoForm } from "./TodoForm"; // Importing the form for adding todos

const todoKey = "reactTodo"; // Key for storing the tasks in localStorage

export const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    return rawTodos ? JSON.parse(rawTodos) : []; // Parse the rawTodos from localStorage or return empty array if none
  });

  // Function to handle the form submission when a new task is added
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatched = tasks.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) {
      alert("Task already exists!");
      return;
    }

    const updatedTasks = [...tasks, { id, content, checked }];
    setTasks(updatedTasks);
    localStorage.setItem(todoKey, JSON.stringify(updatedTasks)); // Save to localStorage
  };

  // Function to handle deleting a task from the list
  const handleDeleteTodo = (taskToDelete) => {
    const updatedTasks = tasks.filter((curTask) => curTask.id !== taskToDelete.id);
    setTasks(updatedTasks);
    localStorage.setItem(todoKey, JSON.stringify(updatedTasks)); // Save to localStorage
  };

  // Function to clear all tasks from the list
  const handleClearTodoData = () => {
    setTasks([]);
    localStorage.removeItem(todoKey); // Remove all tasks from localStorage
  };

  // Function to handle the checked state of a task
  const handleCheckedTodo = (taskId) => {
    const updatedTasks = tasks.map((curTask) =>
      curTask.id === taskId ? { ...curTask, checked: !curTask.checked } : curTask
    );
    setTasks(updatedTasks);
    localStorage.setItem(todoKey, JSON.stringify(updatedTasks)); // Save to localStorage
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTodo}
        onHandleCheckedTodo={handleCheckedTodo}
      />

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
