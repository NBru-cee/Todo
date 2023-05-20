import Task from "./Task";
const Feed = ({ tasks }) => {
      return (
            <div>
                  {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                  ))}
            </div>
      );
};

export default Feed;
