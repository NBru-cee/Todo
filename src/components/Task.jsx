import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const Task = ({ task }) => {
      const completed = useStoreState((state) => state.completed);
      return (
            <article className="task">
                  <Link to={`/task/${task.id}`}>
                        <h2>{task.title}</h2>
                        <p className="taskDate">
                              {task.datatime}{" "}
                              {completed && (
                                    <span className="check">&#x2713;</span>
                              )}
                        </p>
                  </Link>
                  <p className="taskBody">
                        {task.body.length <= 35
                              ? task.body
                              : `${task.body.slice(0, 35)}....`}
                  </p>
            </article>
      );
};

export default Task;
