import { useState } from "react";

export function Sort({ users, setUsers }) {
//   const [key, order] = e.target.value.split("/");
//   const handleSort = (users, order = 1, key) => {
//     users.sort((a, b) => {
//       const el1 = key ? a[key] : a;
//       const el2 = key ? b[key] : b;
//       setUsers(
//         (users) =>
//           String(el1).localeCompare(String(el2), undefined, { numeric: true }) *
//           order
//       );
//     });
//   };

  return (
    <select
      className="border border-black"
      name="orderBy"
      onChange={(e) => handleSort()}
    >
      <option value="name/1">Name (A-Z)</option>
      <option value="name/-1">Name (Z-A)</option>
      <option value="username/1">User Name (A-Z)</option>
      <option value="username/-1">User Name (Z-A)</option>
    </select>
  );
}
