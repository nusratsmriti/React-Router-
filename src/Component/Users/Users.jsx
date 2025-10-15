import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

export default function Users() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h1>This is Users</h1>
      <div>
        {users.map(user=>  <User key={user} user={user}></User>)}
      </div>
    </div>
  );
}
