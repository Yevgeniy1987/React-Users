export const ModalWindow = ({ users }) => {
  const { id, name, userName, email, address, phone, website, company } = users;
  const { street, suite, city, zipcode } = address;
  const { name: companyName } = company;

  <form className="modal_content hover:bg-amber-200 font-medium">
    <div>
      <label>Name</label>
      <input className="" onChange={() => getValue(name.value)}></input>
    </div>
    <div>
      <label>user name</label>
      <input className="table-text" onChange={() => getValue(userName.value)}></input>
    </div>
    <div>
      <label>Email</label>
      <input className="table-text" onChange={() => getValue(email.value)}></input>
    </div>
    <div>
      <label>Street</label>
      <input className="table-text" onChange={() => getValue(street.value)}></input>
    </div>
    <div>
      <label>Suite</label>
      <input className="table-text" onChange={() => getValue(suite.value)}></input>
    </div>
    <div>
      <label htmlFor="">city</label>
      <input className="table-text" onChange={() => getValue(city.value)}></input>
    </div>
    <div>
      <label>Zipcode</label>
      <input className="table-text" onChange={() => getValue(zipcode.value)}></input>
    </div>
    <div>
      <label>Phone</label>
      <input className="table-text" onChange={() => getValue(phone.value)}></input>
    </div>
    <div>
      <label>Website</label>
      <input className="table-text" onChange={() => getValue(website.value)}></input>
    </div>
    <div>
      <label>Company name</label>
      <input className="table-text" onChange={() => getValue(companyName.value)}></input>
    </div>
    <div>
      <button className="btn border bg-gray-200 p-1">Update</button>
      <button className="btn border bg-red-200 p-1">Cancel</button>
    </div>
  </form>;
};
