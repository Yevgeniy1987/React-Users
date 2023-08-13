export function SearchUserInTable({ setUsers }) {
  const handleSearch = (e) => {
    e.preventDefault();

    const searchQueryString = e.searchQuery.value
      .trim()
      .replaceAll(/\s{2,}/g, " ")
      .toLowerCase();
    console.log(searchQueryString);

    const filteredUsers = users.filter((user) => {
      return `${user.name} 
        ${user.username} 
        ${user.address}`
        .toLowerCase()
        .includes(searchQueryString);
    });
    setUsers((users) => [filteredUsers]);
  };
  return (
    <form>
      <input
        className="border-black border focus:border-lime-500 search-bar"
        type="search"
        name="searchQuery"
      />
      <button
        className="rounded-3xl border border-black p-2 bg-stone-400 duration-300 hover:bg-orange-400"
        type="submit"
        onChange={(e) => handleSearch(e)}
      >
        Search
      </button>
    </form>
  );
}
