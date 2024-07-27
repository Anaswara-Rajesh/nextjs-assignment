"use client";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../actions/getUsers";
import { useInView } from "react-intersection-observer";

const NUMBER_OF_USERS = 10;

const UsersList = ({ initialUsers }: any) => {
  const [users, setUsers] = useState(initialUsers);
  const { ref, inView } = useInView();
  console.log(initialUsers, "initialUsers");

  const fetchMoreUsers = async () => {
    const result = await getUsers(NUMBER_OF_USERS);
    const fetchedUsers = result?.results;
    setUsers([...users, ...fetchedUsers]);
  };

  useEffect(() => {
    if (inView) {
      fetchMoreUsers();
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-3">
      {users?.map((user: any, index: any) => (
        <UserCard key={index} user={user} />
      ))}
      <div ref={ref}>Loading...</div>
    </div>
  );
};

export default UsersList;
