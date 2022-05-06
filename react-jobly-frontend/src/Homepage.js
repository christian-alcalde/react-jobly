import UserContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="home container text-center">
      <div className="">
        <h1 className="jobly-title">Jobly</h1>
        <h4 className="">All the jobs in one, convenient place.</h4>
        {currentUser ? (
          <div className="">Welcome back, {currentUser.firstName}</div>
        ) : (
          <div className="">
            <Link to="/login">
              <button className="btn btn-primary m-2">Log In</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-primary m-2">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
