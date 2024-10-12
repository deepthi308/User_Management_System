import User from "../user/User";
import "./users.css";

export default function Users({ users }) {
  console.log(users);
  return (
    <ul className="users">
      {users.map((user, index) => (
        <User key={index} user={user} id={index} />
      ))}
    </ul>
  );
}
