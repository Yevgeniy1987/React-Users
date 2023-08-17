import { useEffect, useState } from "react";

// import { users as usersData } from "./data/users";

import { UserTable } from "./components/UserTable";
import { AddUserTable } from "./components/AddUserTable";
import { SortUsers } from "./components/SortUsers";
import { SearchUserInTable } from "./components/SearchUserInTable";

import "./index.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
  },[]);

  return (
    <main>
      <div className="container">
        <h1 className="text-center w-full px-6 py-6 text-8xl font-bold bg-contain">
          Users' table
        </h1>

        <div className="w-1/3 p-2">
          <AddUserTable setUsers={setUsers} />
        </div>
        <div className="flex justify-between">
          <SearchUserInTable setUsers={setUsers} users={users}/>

          <SortUsers setUsers={setUsers} />
        </div>
        <div className="users-table mt-5" id="users-table">
          <UserTable users={users} setUsers={setUsers} />
        </div>
      </div>
    </main>
  );
}

export default App;
