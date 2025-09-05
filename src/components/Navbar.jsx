import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.css";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header>
      <nav className='navbar' aria-label="Main Navigation">
        <div className='logo'>
          <Link to="/"><img src={logo} height="40" width="90" alt="Udaan Logo" /></Link>
        </div>
        <ul className={`links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/opportunities" onClick={() => setMenuOpen(false)}>Opportunities</Link></li>
          <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
          <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
          <li><Link to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</Link></li>
          <div className="mobile-action-menu">
            <Button to={"/login"} value={"Login"} className="login-btn" />
            <Button to={"/sign-up"} value={"Sign up"} className="signup-btn" />
          </div>
        </ul>
        <div className='action-menu'>
          <Button to={"/login"} value={"Login"} className="login-btn" />
          <Button to={"/sign-up"} value={"Sign up"} className="signup-btn" />
        </div>
        <button
          className="toggle-btn"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
