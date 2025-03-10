import { useState } from "react";
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
      

      <form onSubmit={handleSubmit} className="register-form">
      <div className="register-logo"><img src="src\assets\logo.png" height="50rem" width="100rem" alt=""/></div>
        <div className="register-user">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="register-pwd">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="register-pwd">
          <input
            type="password"
            name="confirm"
            placeholder="Confirm password"
            value={formData.confirm}
            onChange={handleChange}
          />
        </div>
        <div className="register-pwd">
          <input
            type="password"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="register-options">
            <p>Register as: </p>
            <div>
            <label>
            <input
            type="radio"
            name="option"
            value={formData.option}
          /> Organisation
            </label>
            <label>
            <input
            type="radio"
            name="option"
            value={formData.option}
          />  Volunteer
            </label>
            </div>
            
          
        </div>
        {error && <p className="register-error">{error}</p>}
        <button type="submit" className="register-btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
