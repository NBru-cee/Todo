import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

const Nav = () => {
      const tasks = useStoreState((state) => state.tasks);
      const setSearchResult = useStoreActions(
            (actions) => actions.setSearchResult
      );
      const search = useStoreState((state) => state.search);
      const setSearch = useStoreActions((actions) => actions.setSearch);

      useEffect(() => {
            const filteredResults = tasks.filter(
                  (task) =>
                        (task.body &&
                              task.body
                                    .toLowerCase()
                                    .includes(search.toLowerCase())) ||
                        (task.title &&
                              task.title
                                    .toLowerCase()
                                    .includes(search.toLowerCase()))
            );
            setSearchResult(filteredResults);
      }, [tasks, search, setSearchResult]);

      return (
            <nav className="Nav">
                  <form
                        className="searchForm"
                        onSubmit={(e) => e.preventDefault()}
                  >
                        <label htmlFor="search">Search Tasks</label>
                        <input
                              type="text"
                              id="search"
                              placeholder="Search Tasks"
                              value={search}
                              autoComplete="off"
                              onChange={(e) => setSearch(e.target.value)}
                        />
                  </form>
                  <ul>
                        <li>
                              <Link to="/">Home</Link>
                        </li>
                        <li>
                              <Link to="/task">Task</Link>
                        </li>
                  </ul>
            </nav>
      );
};

export default Nav;
