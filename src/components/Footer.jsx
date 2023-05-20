import { useStoreState } from "easy-peasy";
const Footer = () => {
      const today = new Date();
      const taskCount = useStoreState((state) => state.taskCount);
      return (
            <footer className="Footer">
                  <p style={{ textAlign: "center" }}>
                        {taskCount} {taskCount > 1 ? "Tasks" : "Task"}
                  </p>
                  <p>Copyright &copy; {today.getFullYear()} Bruce Inc.</p>
            </footer>
      );
};

export default Footer;
