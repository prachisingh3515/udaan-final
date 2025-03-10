import { useState } from "react";
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
      

      <form onSubmit={handleSubmit} className="login-form">
      <div className="login-logo"><img src="src\assets\logo.png" height="50rem" width="100rem" alt=""/></div>
        <div className="login-user">
          <input
            type="text"
            name="username"
            placeholder="Username or email"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="login-pwd">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
