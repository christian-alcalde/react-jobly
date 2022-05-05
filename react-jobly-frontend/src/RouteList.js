import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import UserContext from "./userContext";
import { useContext } from "react";

/** Houses site routes.
 *
 * App -> RouteList
 **/

function RouteList({ handleLogin, handleRegister, alert }) {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={<LoginForm handleLogin={handleLogin} alert={alert} />}
      />
      <Route
        path="/signup"
        element={<SignupForm handleRegister={handleRegister} alert={alert} />}
      />
      {currentUser ? (
        <>
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:name" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to={"/login"} />} />
      )}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default RouteList;
