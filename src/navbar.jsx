import React from "react";
import "./navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="topnav">

      
      
        <h1 className="active">
        <Link to="/">Home</Link>
         
        </h1>
      
        <h1 className="active">
        <Link to="/aboutus">About Us</Link>
        </h1>
        
        <h1 className="active">
        <Link to="/contact">Contact Us</Link>
        
        </h1>
        

      
    </nav>
  );
}

export default Navbar;
