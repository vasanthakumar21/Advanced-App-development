import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  const navtoreg = () => {
    navigate("/Signup");
  };
  const navtoboat = () => {
    navigate("/boat");
  };
  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log("Form submitted successfully");
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="back">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckboxChange}
              />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button onClick={navtoboat}type="submit" className="btn">
            Login
          </button>
          <div className="register-link" onClick={navtoreg}>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
