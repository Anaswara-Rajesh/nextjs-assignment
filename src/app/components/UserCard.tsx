export default function UserCard({ user }: any) {
  return (
    <div className="bg-indigo-400 text-white rounded w-96 p-3">
      <p>{`${user.name.first} ${user.name.last}`}</p>
      <img src={user.picture.thumbnail} alt="User Thumbnail" />
      <div>{user?.phone}</div>
      <div>{user?.email}</div> 
    </div>
  );
}
