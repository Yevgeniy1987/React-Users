// import { users } from "../data/users";

export function SearchUserInTable({ setUsers }) {
  const handleSearch = (e) => {
    e.preventDefault();

    const searchQueryString = e.searchQuery.value
      .trim()
      .replaceAll(/\s{2,}/g, " ")
      .toLowerCase();

    fetch(`https://jsonplaceholder.typicode.com/users?q=${searchQueryString}`)
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
  };

  return (
    <form onSubmit={handleSearch}>
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
  );
}
