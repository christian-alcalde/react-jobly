import "./App.css";
import RouteList from "./RouteList";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./userContext";
import JoblyApi from "//api"

/** Site application.
 *
 * App -> [Navigation, RouteList]
 **/

const api = JoblyApi();

function App() {
  const [user, setUser] = useState(null);

  async function handleLogin(formData){
    const resp = api.login(formData)

    if(resp.user) setUser(resp.user); // fix this 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user }}>
          <Navigation />
          <RouteList />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
