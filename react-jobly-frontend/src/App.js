import "./App.css";
import RouteList from "./RouteList";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import UserContext from "./userContext";
import JoblyApi from "./api";

/** Site application.
 *
 * App -> [Navigation, RouteList]
 **/

function App() {
  const [user, setUser] = useState(null);

  async function handleLogin(formData) {
    JoblyApi.token = null;
    const token = await JoblyApi.login(formData);

    if (token) {
      getUser(formData.username);
    }
  }

  async function handleRegister(formData) {
    JoblyApi.token = null;
    const token = await JoblyApi.register(formData);

    if (token) {
      getUser(formData.username);
    }
  }

  async function getUser(username) {
    const user = await JoblyApi.getUser(username);
    setUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <Navigation />
          <RouteList
            handleLogin={handleLogin}
            handleRegister={handleRegister}
          />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
