
import React, { useState } from "react";
import "../index.css"; 
import Logo from "../assets/logo.jpg"
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister && formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    alert(
      isRegister
        ? `🎉 Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`
        : `✅ Logged In Successfully!\nEmail: ${formData.email}`
    );
  };

  // Forgot Password Section
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    alert(`📩 The reset password link has been sent to ${formData.email}!`);
    setForgotPassword(false);
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h1>{isRegister ? "REGISTRATION" : forgotPassword ? "RESET PASSWORD" : "LOGIN"}</h1>
        
        <form onSubmit={forgotPassword ? handleForgotPasswordSubmit : handleSubmit} className="inline-form">
          {isRegister && (
            <div className="input-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {!forgotPassword && (
            <>
              <div className="input-group pass-input-div">
                <label htmlFor="password">Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {isRegister && (
                <div className="input-group pass-input-div">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </>
          )}

          <div className="login-center-buttons">
            <button type="submit" className="login-btn">
              {isRegister ? "Sign Up" : forgotPassword ? "Reset Password" : "Log In"}
            </button>
          </div>
        </form>

        {!forgotPassword && (
          <p className="login-bottom-p">
            <a href="#" className="forgot-pass-link" onClick={() => setForgotPassword(true)}>
              Forgot password?
            </a>
          </p>
        )}

        {!forgotPassword && (
          <p className="login-bottom-p">
            {isRegister ? "Already have an account? " : "Don't have an account? "}
            <a href="#" onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Log In" : "Sign Up"}
            </a>
          </p>
        )}

        {forgotPassword && (
          <p className="login-bottom-p">
            <a href="#" onClick={() => setForgotPassword(false)}>
              Back to Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
