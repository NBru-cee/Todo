import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import { useStoreActions, useStoreState } from "easy-peasy";
const EditTask = () => {
      const navigate = useNavigate();
      const { id } = useParams();

      const editTitle = useStoreState((state) => state.editTitle);
      const editBody = useStoreState((state) => state.editBody);
      const editTask = useStoreActions((actions) => actions.editTask);
      const completed = useStoreState((state) => state.completed);
      const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
      const setEditBody = useStoreActions((actions) => actions.setEditBody);
      const getTaskById = useStoreState((state) => state.getTaskById);
      const setCompleted = useStoreActions((actions) => actions.setCompleted);
      const task = getTaskById(id);

      useEffect(() => {
            if (task) {
                  setEditTitle(task.title);
                  setEditBody(task.body);
            }
      }, [task, setEditBody, setEditTitle]);

      const handleEdit = (id) => {
            const datatime = format(new Date(), "MMMM dd, yyyy pp");
            const updatedTask = {
                  id,
                  title: editTitle,
                  datatime,
                  body: editBody,
                  completed: completed,
            };
            editTask(updatedTask);
            navigate(`/task/${id}`);
      };

      return (
            <main className="NewTask">
                  {editTitle && (
                        <>
                              <h2>Edit Task</h2>
                              <form
                                    className="newTaskForm"
                                    onSubmit={(e) => e.preventDefault()}
                              >
                                    <label htmlFor="taskTitle">Title:</label>
                                    <input
                                          type="text"
                                          id="taskTitle"
                                          required
                                          value={editTitle}
                                          onChange={(e) =>
                                                setEditTitle(e.target.value)
                                          }
                                    />
                                    <label htmlFor="taskBody">Task:</label>
                                    <textarea
                                          required
                                          value={editBody}
                                          onChange={(e) =>
                                                setEditBody(e.target.value)
                                          }
                                    ></textarea>
                                    <div className="completed">
                                          <input
                                                type="checkbox"
                                                id="completed"
                                                value={completed}
                                                onChange={(e) =>
                                                      setCompleted(
                                                            e.target.checked
                                                      )
                                                }
                                          />
                                          <span>Completed</span>
                                    </div>
                                    <button
                                          type="button"
                                          onClick={() => handleEdit(task.id)}
                                    >
                                          Save
                                    </button>
                              </form>
                        </>
                  )}
                  {!editTitle && (
                        <>
                              <h2>Task Not Found</h2>
                              <p>Well, that's disappointing.</p>
                              <p>
                                    <Link to="/"> Visit Our Homepage</Link>
                              </p>
                        </>
                  )}
            </main>
      );
};

export default EditTask;
