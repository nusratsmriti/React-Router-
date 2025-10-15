import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div>
      <h1>This is a header</h1>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/mobiles"> Mobiles </NavLink>
        <NavLink to="/laptop"> Laptop </NavLink>
        <NavLink to="/users"> Users </NavLink>
        <NavLink to="/users2"> Users2 </NavLink>
        <NavLink to="/posts"> Posts </NavLink>
        
      </nav>
    </div>
  );
}
