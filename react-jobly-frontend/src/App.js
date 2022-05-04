import "./App.css";
import RouteList from "./RouteList";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

/** Site application.
 *
 * App -> [Navigation, RouteList]
 **/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
