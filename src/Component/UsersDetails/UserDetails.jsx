import { useLoaderData } from "react-router"


export default function UserDetails() {
  const user = useLoaderData();
  console.log(user)
  return (
    <div>
      <h1>This is UserDetails here</h1>
    </div>
  )
}
