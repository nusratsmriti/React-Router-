import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Component/Root/Root.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Component/Home/Home.jsx';
import Mobiles from './Component/Mobiles/Mobiles.jsx';
import Laptop from './Component/Laptop/Laptop.jsx'
import Users from './Component/Users/Users.jsx'
import Users2 from './Component/Users2/Users2.jsx'
import UserDetails from './Component/UsersDetails/UserDetails.jsx'
import Posts from './Component/Posts/Posts.jsx'
import PostDetails from './Component/PostDetails/PostDetails.jsx'
const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mobiles",
        Component: Mobiles,
      },
      {
        path: "/laptop",

        Component: Laptop,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/users2",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path:'posts/:postId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetails

      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </StrictMode>,
)

