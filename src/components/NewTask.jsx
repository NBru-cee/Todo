import { useNavigate } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import format from "date-fns/format";

const NewTask = () => {
      const tasks = useStoreState((state) => state.tasks);
      const taskTitle = useStoreState((state) => state.taskTitle);
      const taskBody = useStoreState((state) => state.taskBody);

      const saveTask = useStoreActions((actions) => actions.saveTask);
      const setTaskTitle = useStoreActions((actions) => actions.setTaskTitle);
      const setTaskBody = useStoreActions((actions) => actions.setTaskBody);

      const navigate = useNavigate();

      const handleSubmit = (e) => {
            e.preventDefault();
            const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
            const datatime = format(new Date(), "MMMM dd, yyyy pp");
            const newTask = {
                  id,
                  title: taskTitle,
                  datatime,
                  body: taskBody,
            };
            saveTask(newTask);
            navigate("/");
      };

      return (
            <main className="NewTask">
                  <h2>New Task</h2>
                  <form className="newTaskForm" onSubmit={handleSubmit}>
                        <label htmlFor="taskTitle">Title:</label>
                        <input
                              type="text"
                              id="taskTitle"
                              required
                              autoFocus
                              autoComplete="off"
                              value={taskTitle}
                              onChange={(e) => setTaskTitle(e.target.value)}
                        />
                        <label htmlFor="taskBody">Body:</label>
                        <textarea
                              required
                              value={taskBody}
                              onChange={(e) => setTaskBody(e.target.value)}
                        ></textarea>
                        <button type="submit">Submit</button>
                  </form>
            </main>
      );
};

export default NewTask;
