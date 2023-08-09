export function UserTableRow({ user, setUsers }) {
  const { id, name, username, email, address, phone, website, company } = user;
  const { street, suite, city, zipcode } = address || {};
  const { name: companyName } = company || {};

  const handleDelete = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };
  //   setUsers(newUser);
  return (
    <tr className="hover:bg-amber-200 font-medium">
      <td className="table-text">{name}</td>
      <td className="table-text">{username}</td>
      <td className="table-text">{email}</td>
      <td className="table-text">{street}</td>
      <td className="table-text">{suite}</td>
      <td className="table-text">{city}</td>
      <td className="table-text">{zipcode}</td>
      <td className="table-text">{phone}</td>
      <td className="table-text">{website}</td>
      <td className="table-text">{companyName}</td>
      <td className="table-text">
        <button
          className="btn border bg-gray-200 p-1"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
        <button
          className="btn border bg-red-200 p-1"
          onClick={() => handleEdit(id)}
        >
          Update
        </button>
      </td>
    </tr>
  );
}
