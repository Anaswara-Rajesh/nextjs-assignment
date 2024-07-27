import React from "react";
import { IoClose } from "react-icons/io5";

const UserModal = ({ user, onClose }: { user: any; onClose: () => void }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <button
          onClick={onClose}
          className="top-4 right-4 text-gray-800 hover:text-gray-900"
        >
          <IoClose size={20} />
        </button>
        <div className="flex flex-col items-center">
          <img
            className="rounded-full border-4 border-indigo-500"
            src={user.picture.large}
            alt="User Profile Picture"
            width={120}
            height={120}
          />
          <h2 className="text-2xl font-semibold mt-4">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600">Age: {user.dob.age}</p>
          <p className="text-gray-600">Gender: {user.gender}</p>
          <p className="text-gray-600">Country: {user.location.country}</p>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Location: {user.location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
