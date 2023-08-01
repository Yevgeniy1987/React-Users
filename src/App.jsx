import "./index.css";

import { UserTable } from "./components/UserTable";
import { ModalWindow } from "./components/ModalWindow";

function App() {
  return (
    <main>
      <div className="container">
        <h1 className="text-center w-full px-6 py-6 text-8xl font-bold bg-contain">
          Users' table
        </h1>
        <div className="table-pos mt-5">
          <form className="modal_content hover:bg-amber-200 font-medium">
            <div>
              <label>Name</label>
              <input className=""></input>
            </div>
            <div>
              <label>user name</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Email</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Street</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Suite</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label htmlFor="">city</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Zipcode</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Phone</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Website</label>
              <input className="table-text"></input>
            </div>
            <div>
              <label>Company name</label>
              <input className="table-text"></input>
            </div>
            <div>
              <button className="btn border bg-gray-200 p-1">Update</button>
              <button className="btn border bg-red-200 p-1">Cancel</button>
            </div>
          </form>
          ;
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
