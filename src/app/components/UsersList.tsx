import React from "react";

const UsersList = ({ initialUsers }: any) => {
  return (
    <div>
      <ul className="user-list">
        {initialUsers?.map((user:any, index:any) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt="User Thumbnail" />
            <p>{`${user.name.first} ${user.name.last}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
