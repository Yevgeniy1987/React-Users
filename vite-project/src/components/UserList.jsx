import { Users } from "../Users";
import { UserTable } from "./UserTable";

export function UserList() {
  return (
    <tbody id="table-data">
      {Users.map((user) => (
        <UserTable user={user} />
      ))}
    </tbody>
  );
}
