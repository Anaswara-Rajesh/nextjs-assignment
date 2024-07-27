import { getUsers } from "./actions/getUsers";
import UsersList from "./components/UsersList";

const INITIAL_NUMBER_OF_USERS = 30;

export default async function Home() {
  const data = await getUsers(INITIAL_NUMBER_OF_USERS);
  console.log(data, "data>>>>....");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1>List of Users</h1>
        <UsersList initialUsers={data?.results} />
      </div>
    </main>
  );
}
