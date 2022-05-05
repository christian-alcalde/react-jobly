import "./App.css";
import RouteList from "./RouteList";
import Navigation from "./Navigation";
import { BrowserRouter, useNavigate } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(window.localStorage.token);
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  useEffect(
    function addCurrUserToState() {
      async function getUser() {
        try {
          const username = jwt(token).username;
          JoblyApi.token = token;
          console.log("token", JoblyApi.token);
          const currentUser = await JoblyApi.getUser(username);
          setUser(currentUser);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
        setIsLoading(false);
      }
      getUser();
    },
    [token]
  );

  function handleToken(token) {
    JoblyApi.token = token;
    setToken(token);
    window.localStorage.token = token;
    setAlert(null);
  }

  async function handleLogin(formData) {
    try {
      const tokenFromApi = await JoblyApi.login(formData);
      handleToken(tokenFromApi);
      navigate("/");
    } catch (err) {
      setAlert(err);
    }
    setIsLoading(false);
  }

  async function handleRegister(formData) {
    try {
      const tokenFromApi = await JoblyApi.register(formData);
      handleToken(tokenFromApi);
      navigate("/companies");
    } catch (err) {
      setAlert(err);
    }
    setIsLoading(false);
  }

  async function handleUpdate(formData) {
    try {
      const response = await JoblyApi.update(formData);
      setUser(response);
      navigate("/");
    } catch (err) {
      setAlert(err);
    }
    setIsLoading(false);
  }

  function handleLogout() {
    JoblyApi.token = null;
    setUser(null);
    window.localStorage.token = null;
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser }}>
        <Navigation handleLogout={handleLogout} />
        {isLoading ? (
          <Loading />
        ) : (
          <RouteList
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleUpdate={handleUpdate}
            alert={alert}
          />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
