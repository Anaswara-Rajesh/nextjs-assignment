"use client"
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../actions/getUsers";
import { useInView } from "react-intersection-observer";
import UserModal from "./UserModal";

const NUMBER_OF_USERS = 10;
const MAX_USERS = 100;

const UsersList = ({ initialUsers }: any) => {
  const [users, setUsers] = useState(initialUsers);
  const { ref, inView } = useInView();
  const [isFetching, setIsFetching] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

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

  const handleCardClick = (user: any) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users?.map((user: any, index: number) => (
          <UserCard key={index} user={user} onClick={handleCardClick} />
        ))}
      </div>
      {users?.length < MAX_USERS && (
        <div ref={ref} className="mt-4 text-indigo-500 font-semibold">
          {isFetching ? "Loading more users..." : "Loading..."}
        </div>
      )}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default UsersList;
