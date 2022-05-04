import React, { useState } from "react";

function SignupForm({ handleRegister }) {
  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
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
    handleRegister(formData);
    setFormData(initialFormData);
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <div className="card">
        <form className="NewTodoForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              id="signup-username"
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
              id="signup-password"
              name="password"
              className="form-control"
              placeholder="password"
              onChange={handleChange}
              value={formData.password}
              aria-label="password"
            />
          </div>

          <div className="mb-3">
            <input
              id="signup-firstName"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
              aria-label="firstName"
            />
          </div>

          <div className="mb-3">
            <input
              type="lastName"
              id="signup-lastName"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
              aria-label="lastName"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              id="signup-email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              aria-label="email"
            />
          </div>
          <button className="btn-primary btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
