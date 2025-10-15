import React from 'react'
import { useLoaderData } from 'react-router'

export default function PostDetails() {
  const post = useLoaderData();
  console.log(post)
  return (
    <div>
      <p>{ post.body}</p>
    </div>
  )
}
