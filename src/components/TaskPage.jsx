import { useNavigate, useParams, Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const TaskPage = () => {
      const getTaskById = useStoreState((state) => state.getTaskById);
      const { id } = useParams();
      const deleteTask = useStoreActions((actions) => actions.deleteTask);
      const task = getTaskById(id);
      const navigate = useNavigate();
      const handleDelete = (id) => {
            deleteTask(id);
            navigate("/");
      };

      return (
            <main className="TaskPage">
                  <article className="task">
                        {task && (
                              <>
                                    <h2>{task.title}</h2>

                                    <p className="taskDate">{task.datatime} </p>

                                    <p className="taskBody">{task.body}</p>

                                    <div className="taskBtns">
                                          <Link to={`/edit/${task.id}`}>
                                                <button className="editButton">
                                                      Edit Task
                                                </button>
                                          </Link>

                                          <button
                                                className="deleteButton"
                                                onClick={() =>
                                                      handleDelete(task.id)
                                                }
                                          >
                                                Delete Task
                                          </button>
                                          <Link to="/" className="backLink">
                                                Back
                                          </Link>
                                    </div>
                              </>
                        )}
                        {!task && (
                              <>
                                    <h2>Task Not Found</h2>
                                    <p>Well, that's disappointing.</p>
                                    <p>
                                          <Link to="/">Visit Our Homepage</Link>
                                    </p>
                              </>
                        )}
                  </article>
            </main>
      );
};

export default TaskPage;
