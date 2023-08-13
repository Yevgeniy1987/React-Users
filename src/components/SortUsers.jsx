import { smartSort } from "../helpers/smartSort";

export function SortUsers({ setUsers }) {
  const handleSort = (e) => {
    const [key, order] = e.target.value.split("/");

    setUsers((users) => smartSort(users, key, order));
  };

  return (
    <select
      className="border border-black"
      name="orderBy"
      onChange={(e) => handleSort(e)}
    >
      <option value="name/1">Name (A-Z)</option>
      <option value="name/-1">Name (Z-A)</option>
      <option value="username/1">User Name (A-Z)</option>
      <option value="username/-1">User Name (Z-A)</option>
    </select>
  );
}
