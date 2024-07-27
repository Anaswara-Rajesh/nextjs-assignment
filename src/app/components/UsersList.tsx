"use client";
import React, { useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../actions/getUsers";

const NUMBER_OF_USERS = 10;

const UsersList = ({ initialUsers }: any) => {
  const [users, setUsers] = useState(initialUsers);
  console.log(initialUsers, "initialUsers");

  const fetchMoreUsers = async () => {
    const result = await getUsers(NUMBER_OF_USERS);
    const fetchedUsers = result?.results;
    console.log(fetchedUsers,"fetchedUsers");
    setUsers([...users, ...fetchedUsers]);
  };

  return (
    <div className="flex flex-col gap-3">
      {users?.map((user: any, index: any) => (
        <UserCard key={index} user={user} />
      ))}
      <button onClick={fetchMoreUsers}>Load More</button>
    </div>
  );
};

export default UsersList;
