import React, { use } from 'react'
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

export default function Posts() {
  const posts = useLoaderData()
  console.log(posts)
  return (
    <div>
      <h1>This is posts</h1>
      <div>
        {
          posts.map(post=> <Post key={post.id} post={post}> </Post>)
        }
      </div>
    </div>
  )
}
