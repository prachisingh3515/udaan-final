import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Both Username and Password are required!");
      return;
    }

    alert(`Logged in as ${formData.username}`);
    setError("");
  };

  return (
    <div className="login">
      <h1>Welcome Back</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-logo"><img src="src\assets\logo.png" height="50rem" width="100rem" alt="Udaan Logo"/></div>
        
        <div className="login-user">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="login-pwd">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        {error && <p className="login-error">{error}</p>}
        
        <button type="submit" className="login-btn">
            Login
          </button>
         
         <div className="login-links">
           <Link to="/forgot-password">Forgot Password?</Link>
           <Link to="/sign-up">Create Account</Link>
         </div>
      </form>
    </div>
  );
};

export default Login;
