import React from 'react';

export default function UserCard({ user, onClick }: { user: any; onClick: (user: any) => void }) {
  const userImage = user?.picture?.thumbnail;

  return (
    <div
      className="bg-white text-gray-800 rounded-lg shadow-md w-80 mx-auto overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer"
      onClick={() => onClick(user)}
    >
      <div className="flex justify-center p-4 bg-indigo-500">
        <img
          className="rounded-full border-4 border-white transition-transform transform hover:scale-110"
          src={userImage}
          alt="User Thumbnail"
          width={100}
          height={100}
        />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 items-center">
          <div className="font-semibold text-indigo-500">Name:</div>
          <div className="truncate">{`${user?.name?.first} ${user?.name?.last}`}</div>
          <div className="font-semibold text-indigo-500">Age:</div>
          <div>{user?.dob?.age}</div>
          <div className="font-semibold text-indigo-500">Location:</div>
          <div className="truncate">{user?.location?.country}</div>
        </div>
      </div>
    </div>
  );
}
