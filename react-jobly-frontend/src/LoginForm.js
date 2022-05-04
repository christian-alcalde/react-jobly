import React, { useState } from "react";

function LoginForm({ handleLogin }) {
  const initialFormData = { username: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(formData);
    setFormData(initialFormData);
  }

  return (
    <div className="container">
      <h2>Log In</h2>
      <div className="card">
        <form className="NewTodoForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              id="login-username"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
              aria-label="Username"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              id="login-password"
              name="password"
              className="form-control"
              placeholder="password"
              onChange={handleChange}
              value={formData.password}
              aria-label="password"
            />
          </div>
          <button className="btn-primary btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
