import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="m-2">
          <NavLink to="/">Jobly</NavLink>
        </span>
        <div>
          <span className="m-2">
            <NavLink to="/companies">Companies</NavLink>
          </span>
          <span className="m-2">
            <NavLink to="/jobs">Jobs</NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
