import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
      const searchResult = useStoreState((state) => state.searchResult);
      return (
            <main className="Home">
                  {isLoading && <p className="statusMsg">Loading tasks....</p>}
                  {!isLoading && fetchError && (
                        <p
                              className="statusMsg"
                              style={{ color: "red", fontSize: "2em" }}
                        >
                              {fetchError}
                        </p>
                  )}
                  {!isLoading &&
                        !fetchError &&
                        (searchResult.length ? (
                              <Feed tasks={searchResult} />
                        ) : (
                              <p
                                    style={{
                                          marginTop: "2rem",
                                    }}
                              >
                                    No Tasks yet
                              </p>
                        ))}
            </main>
      );
};

export default Home;
