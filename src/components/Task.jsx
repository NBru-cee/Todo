import { Link } from "react-router-dom";
import React, { useState } from "react";

const Task = ({ task }) => {
      const [completed, setCompleted] = useState(false);
      const handleCompleted = (e) => {
            const task = e.target.checked.parentElement.nextSibling;
            console.log(task);
            setCompleted(e.target.checked);
            localStorage.setItem("completeTask", JSON.stringify(task));
      };
      return (
            <article className="task singleTask">
                  <input
                        type="checkbox"
                        value={completed}
                        onChange={handleCompleted}
                  />
                  <Link to={`/task/${task.id}`}>
                        <p
                              className={
                                    completed ? "completedTitle" : "taskTitle"
                              }
                        >
                              {task.title}
                        </p>
                        <p className="taskDate">{task.datatime} </p>
                  </Link>
                  {completed && <span className="check">&#x2713;</span>}
            </article>
      );
};

export default Task;
