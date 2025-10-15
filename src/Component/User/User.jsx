import React from 'react'
import './User.css'
import { Link } from 'react-router';
export default function User({ user }) {
  const { id, name, email, phone } = user;
 
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <p> Email: {email}</p>
      <p>Phone:{phone}</p>
       <Link to={`/users/${id}`}>Show Details </Link>
    </div>
  );
}
