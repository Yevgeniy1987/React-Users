import "./index.css";
import { useState } from "react";
import { users as usersData } from "./data/users";

import { UserTable } from "./components/UserTable";
import { AddUserTable } from "./components/AddUserTable";
import { Sort } from "./components/Sort";

function App() {
  const [users, setUsers] = useState(usersData);
  const [active, setActive] = useState(false);

  return (
    <main>
      <div className="container">
        <h1 className="text-center w-full px-6 py-6 text-8xl font-bold bg-contain">
          Users' table
        </h1>
        <div className="w-1/2">
          <AddUserTable users={users} setUsers={setUsers} />
          <form>
            <input
              className="border-black border focus:border-lime-500 search-bar"
              type="search"
              name="searchQuery"
            />
            <button
              className="rounded-3xl border border-black p-2 bg-stone-400 duration-300 hover:bg-orange-400"
              type="submit"
            >
              Search
            </button>
          </form>
          <Sort users={users} setUsers={setUsers}/>
        </div>

        <div className="users-table mt-5" id="users-table">
          <UserTable users={users} setUsers={setUsers} />
        </div>
      </div>
    </main>
  );
}

export default App;
