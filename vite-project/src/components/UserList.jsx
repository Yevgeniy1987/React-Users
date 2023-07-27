import { users } from "../Users";
import { UserTable } from "./UserTable";

export function UserList() {
  return (
    <tbody id="table-data">
      {users.map((user) => (
        <UserTable user={user} />
      ))}
    </tbody>
  );
}
