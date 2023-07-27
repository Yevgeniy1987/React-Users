import "./index.css";
import { UserList } from "./components/UserList";

function App() {
  return (
    <main>
      <div className="container">
        <h1 className="text-center w-full px-6 py-6 text-8xl font-bold bg-contain">
          Users' table
        </h1>
        <div className="table-pos mt-5">
          <form className="" id="searchForm">
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
          <table className="text-center w-full" id="table">
            <thead className="border text-xl capitalize bg-slate-300">
              <tr>
                <th className="table-text">name</th>
                <th className="table-text">userName</th>
                <th className="table-text">email</th>
                <th className="table-text">street</th>
                <th className="table-text">suite</th>
                <th className="table-text">city</th>
                <th className="table-text">zipCode</th>
                <th className="table-text">phone</th>
                <th className="table-text">website</th>
                <th className="table-text">company</th>
                <th className="table-text">action</th>
              </tr>
            </thead>
            <UserList />
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
