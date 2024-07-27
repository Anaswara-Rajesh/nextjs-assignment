"use client";
import React, { useState } from "react";
import UserCard from "./UserCard";

const UsersList = ({ initialUsers }: any) => {
  const [users, setUsers] = useState(initialUsers);
  console.log(initialUsers, "initialUsers");

  return (
    <div className="flex flex-col gap-3">
      {users?.map((user: any, index: any) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
