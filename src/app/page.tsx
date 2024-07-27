import { getUsers } from "./actions/getUsers";
import UsersList from "./components/UsersList";

const INITIAL_NUMBER_OF_USERS = 30;

export default async function Home() {
  const data = await getUsers(INITIAL_NUMBER_OF_USERS);

  return (
    <div className="flex flex-col items-center p-8 bg-custom-color min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase">
        List of Users
      </h1>
      <UsersList initialUsers={data?.results} />
    </div>
  );
}
