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
    //set loading to true
    const token = await JoblyApi.login(formData);

    if (token) {
      JoblyApi.token = token;
      await getUser(formData.username);
    }
    //set loading to false
  }

  async function handleRegister(formData) {
    const token = await JoblyApi.register(formData);

    if (token) {
      JoblyApi.token = token;
      getUser(formData.username);
    }
  }

  function handleLogout(){
    JoblyApi.token = null;
    setUser(null);
  }

  async function getUser(username) {
    const user = await JoblyApi.getUser(username);
    setUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <Navigation handleLogout={handleLogout}/>
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
