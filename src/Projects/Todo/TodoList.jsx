// This component handles displaying the list of todos and delete functionality

import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ tasks, onDeleteTask, onHandleCheckedTodo }) => {
  return (
    <section className="myUn0rdList">
      <ul>
        {/* Loop over the tasks array and display each task */}
        {tasks.map((curTask) => (
          <li key={curTask.id} className="todo-item">
            <span className={curTask.checked ? "checkList" : "notCheckList"}>{curTask.content}</span>
            {/* Check button toggles the checked state */}
            <button className="check-btn" onClick={() => onHandleCheckedTodo(curTask.id)}>
              <MdCheck />
            </button>
            {/* Delete button triggers the onDeleteTask function */}
            <button className="delete-btn" onClick={() => onDeleteTask(curTask)}>
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
