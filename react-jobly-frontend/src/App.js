import "./App.css";
import RouteList from "./RouteList";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./userContext";
import JoblyApi from "./api";
import Loading from "./Loading";
import jwt from "jwt-decode";

/** Site application.
 *
 * App -> [Navigation, RouteList]
 **/

function App() {
  const [currentUser, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(
    function addCurrUserToState() {
      async function getUser() {
        const username = jwt(token).username;
        const currentUser = await JoblyApi.getUser(username);
        setUser(currentUser);
        setIsLoading(false);
      }
      getUser();
    },
    [token]
  );

  async function handleLogin(formData) {
    if (alert) setAlert(null);
    setIsLoading(true);
    try {
      const response = await JoblyApi.login(formData);
      JoblyApi.token = response;
      setToken(response);
    } catch (err) {
      setAlert(err[0]);
    }
    setIsLoading(false);
  }

  async function handleRegister(formData) {
    setIsLoading(true);
    const tokenFromApi = await JoblyApi.register(formData);

    if (tokenFromApi) {
      JoblyApi.token = tokenFromApi;
      setToken(tokenFromApi);
    }
    setIsLoading(false);
  }

  function handleLogout() {
    JoblyApi.token = null;
    setUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser }}>
          <Navigation handleLogout={handleLogout} />
          {isLoading ? (
            <Loading />
          ) : (
            <RouteList
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              alert={alert}
            />
          )}
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
