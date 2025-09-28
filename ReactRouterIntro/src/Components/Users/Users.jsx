import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-8 ">All Users</h2>
      <div className="mt-10 grid gap-4 grid-cols-3 max-w-7xl mx-auto mb-11">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
