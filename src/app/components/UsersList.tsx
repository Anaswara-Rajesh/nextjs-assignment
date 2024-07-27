"use client";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../actions/getUsers";
import { useInView } from "react-intersection-observer";

const NUMBER_OF_USERS = 10;
const MAX_USERS = 100;

const UsersList = ({ initialUsers }: any) => {
  const [users, setUsers] = useState(initialUsers);
  const { ref, inView } = useInView();
  const [isFetching, setIsFetching] = useState(false);

  console.log(initialUsers, "initialUsers");

  const fetchMoreUsers = async () => {
    if (users?.length >= MAX_USERS || isFetching) return;
    setIsFetching(true);

    const result = await getUsers(NUMBER_OF_USERS);
    const fetchedUsers = result?.results || [];
    setUsers((prevUsers: any[]) => [...prevUsers, ...fetchedUsers]);
    setIsFetching(false);
  };

  useEffect(() => {
    if (inView) {
      fetchMoreUsers();
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-3">
      {users?.map((user: any, index: number) => (
        <UserCard key={index} user={user} />
      ))}
      {users?.length < MAX_USERS && <div ref={ref}>Loading...</div>}
    </div>
  );
};

export default UsersList;
