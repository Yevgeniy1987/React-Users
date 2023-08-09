import { UserTableRow } from "./UserTableRow";

export function UserTable({users, setUsers}) {
  return (
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
      <tbody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} setUsers={setUsers} />
        ))}
      </tbody>
    </table>
  );
}
