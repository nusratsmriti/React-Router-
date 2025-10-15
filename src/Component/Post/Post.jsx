import React from 'react'
import './Post.css'
import { Link } from 'react-router';

export default function Post({ post }) {
  const { id,title,body } = post;
  return (
    <div className="post-card">
      <h4>Id: {id}</h4>
      <p>{title}</p>
      <Link to={`/posts/${id}`}>Details</Link>
    </div>
  );
}
