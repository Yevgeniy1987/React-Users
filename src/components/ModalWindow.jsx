export const ModalWindow = ({ updatedUser }) => {
  const { id, name, username, email, address, phone, website, company } = updatedUser;
  const { street, suite, city, zipcode } = address;
  const { name: companyName } = company;

  <form className="modal_content hover:bg-amber-200 font-medium">
    <div>
      <label>Name</label>
      <input className="">{name}</input>
    </div>
    <div>
      <label>user name</label>
      <input className="table-text">{username}</input>
    </div>
    <div>
      <label>Email</label>
      <input className="table-text">{email}</input>
    </div>
    <div>
      <label>Street</label>
      <input className="table-text">{street}</input>
    </div>
    <div>
      <label>Suite</label>
      <input className="table-text">{suite}</input>
    </div>
    <div>
      <label htmlFor="">city</label>
      <input className="table-text">{city}</input>
    </div>
    <div>
      <label>Zipcode</label>
      <input className="table-text">{zipcode}</input>
    </div>
    <div>
      <label>Phone</label>
      <input className="table-text">{phone}</input>
    </div>
    <div>
      <label>Website</label>
      <input className="table-text">{website}</input>
    </div>
    <div>
      <label>Company name</label>
      <input className="table-text">{companyName}</input>
    </div>
    <div>
      <button className="btn border bg-gray-200 p-1">Update</button>
      <button className="btn border bg-red-200 p-1">Cancel</button>
    </div>
  </form>;
};
