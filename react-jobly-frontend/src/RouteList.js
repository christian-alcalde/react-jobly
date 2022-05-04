import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/** Houses site routes.
 *
 * App -> RouteList
 **/

function RouteList({ handleLogin, handleRegister, alert }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={<LoginForm handleLogin={handleLogin} alert={alert} />}
      />
      <Route
        path="/signup"
        element={<SignupForm handleRegister={handleRegister} />}
      />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:name" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default RouteList;
