import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"
const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" ,confirm:"",email:"",option:""});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.confirm || !formData.email || !formData.option) {
      setError("All fields are are required!");
      return;
    }

    alert(`Registered as ${formData.username}`);
    setError("");
  };

  return (
    <div className="register">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-logo"><img src="src\assets\logo.png" height="50rem" width="100rem" alt="Udaan Logo"/></div>
        
        <div className="register-user">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="register-user">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="register-pwd">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <div className="register-pwd">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
          />
        </div>
        
        <div className="register-options">
          <p>Register as:</p>
          <div>
            <label>
              <input
                type="radio"
                name="option"
                value="organisation"
                onChange={handleChange}
                checked={formData.option === "organisation"}
              /> 
              Organisation
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="volunteer"
                onChange={handleChange}
                checked={formData.option === "volunteer"}
              /> 
              Volunteer
            </label>
          </div>
        </div>
        
        {error && <p className="register-error">{error}</p>}
        
        <button type="submit" className="register-btn">
          Sign Up
        </button>
        
        <div className="register-links">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
