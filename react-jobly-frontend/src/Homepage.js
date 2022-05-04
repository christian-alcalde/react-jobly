import UserContext from "./userContext";
import { useContext } from "react";

function Homepage() {
  const { user } = useContext(UserContext);


  return (
    <div className="container">
      <h1 className="">Jobly</h1>
      <h4 className="">All the jobs in one, convenient place.</h4>
      {user ? (
        <div className="">Welcome back, {user.firstName}</div>
      ) : (
        <div className="">
          <button className="btn btn-primary">Log In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Homepage;
