import EditTask from "./components/EditTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Missing from "./components/Missing";
import Nav from "./components/Nav";
import NewTask from "./components/NewTask";
import TaskPage from "./components/TaskPage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";
function App() {
      const { data, fetchError, isLoading } = useAxiosFetch(
            "http://localhost:3500/tasks"
      );
      const setTasks = useStoreActions((actions) => actions.setTasks);
      useEffect(() => {
            setTasks(data);
      }, [data, setTasks]);

      return (
            <div className="App">
                  <Header title="Bruce Inc." />
                  <Nav />
                  <Routes>
                        <Route
                              exact
                              path="/"
                              element={
                                    <Home
                                          isLoading={isLoading}
                                          fetchError={fetchError}
                                    />
                              }
                        />
                        <Route exact path="/task" element={<NewTask />} />
                        <Route exact path="/edit/:id" element={<EditTask />} />
                        <Route path="/task/:id" element={<TaskPage />} />
                        <Route path="*" element={<Missing />} />
                  </Routes>
                  <Footer />
            </div>
      );
}

export default App;
