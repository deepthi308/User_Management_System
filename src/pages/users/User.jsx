import React from "react";
import { useSelector } from "react-redux";
import Users from "../../components/users/Users";
import "./users.css";

export default function User() {
  const users = useSelector((state) => state.data.users);

  return (
    <section className="page userPage">
      <Users users={users} />
    </section>
  );
}
