import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({ id: "", content: "", checked: false });

  const handleInputChange = (value) => {
    setInputValue({ id: Date.now(), content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="Form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">Add Task</button>
        </div>
      </form>
    </section>
  );
};
