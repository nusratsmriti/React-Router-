import React from 'react'
import { use } from 'react';
export default function Users2({ usersPromise }) {
  const users = use (usersPromise);
  console.log(users)
  return (
    <div>
      <h1>This is Users</h1>
    </div>
  );
}
