import "./index.css";
import { useState } from "react";
import { users } from "./data/users";

import { UserTable } from "./components/UserTable";
import { AddUserTable } from "./components/AddUserTable";

function App() {
  // const { id, name, username, email, address, phone, website, company } = users;
  // const { street, suite, city, zipcode } = address;
  // const { name: companyName } = company;

  return (
    <main>
      <div className="container">
        <h1 className="text-center w-full px-6 py-6 text-8xl font-bold bg-contain">
          Users' table
        </h1>
        <div className="w-1/2">
          <AddUserTable
            // id={id}
            // name={name}
            // username={username}
            // email={email}
            // phone={phone}
            // website={website}
            // street={street}
            // suite={suite}
            // city={city}
            // zipcode={zipcode}
            // companyName={companyName}
          />
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
          <select
            className="border border-black"
            name="orderBy"
            id="sort-select"
          >
            <option value="name/asc">Name (A-Z)</option>
            <option value="name/desc">Name (Z-A)</option>
            <option value="username/asc">User Name (A-Z)</option>
            <option value="username/desc">User Name (Z-A)</option>
          </select>
        </div>

        <div className="users-table mt-5" id="users-table">
          <UserTable />
        </div>
      </div>
    </main>
  );
}

export default App;
