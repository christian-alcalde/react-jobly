import UserContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container">
      <div className="align-items-center justify-content-center">
        <h1 className="">Jobly</h1>
        <h4 className="">All the jobs in one, convenient place.</h4>
        {currentUser ? (
          <div className="">Welcome back, {currentUser.firstName}</div>
        ) : (
          <div className="">
            <Link to="/login">
              <button className="btn btn-primary">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>    
  );
}

export default Homepage;
