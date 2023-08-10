
export function AddUserTable({ users, setUsers }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const street = form.street.value;
    const suit = form.suit.value;
    const city = form.city.value;
    const zipcode = form.zipcode.value;
    const phone = form.phone.value;
    const website = form.website.value;
    const companyName = form.companyName.value;
    const newUser = {
      name,
      userName,
      email,
      address:{
        street,
        suit,
        city,
        zipcode,
      },
      
      phone,
      website,
      companyName,
    };
    setUsers((users) => users.push(newUser));
  };
  return (
    <form
      className="modal_content hover:bg-amber-200 font-medium"
      onSubmit={handleSubmit}
    >
      <div className="flex g-3 flex-col">
        <label htmlFor="name">Name</label>
        <input name="name" className="" />
      </div>
      <div>
        <label htmlFor="userName">user name</label>
        <input name="userName" className="table-text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" className="table-text" />
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input name="street" className="table-text" />
      </div>
      <div>
        <label htmlFor="suit">Suite</label>
        <input name="suit" className="table-text" />
      </div>
      <div>
        <label htmlFor="city">city</label>
        <input name="city" className="table-text" />
      </div>
      <div>
        <label htmlFor="zipcode">Zipcode</label>
        <input name="zipcode" className="table-text" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input name="phone" className="table-text" />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input name="website" className="table-text" />
      </div>
      <div>
        <label htmlFor="companyName">Company name</label>
        <input name="companyName" className="table-text" />
      </div>
      <div>
        <button
          className="btn border bg-gray-200 p-1"
          onSubmit={(e) => handleSubmit()}
        >
          Create new user
        </button>
        <button className="btn border bg-red-200 p-1">Cancel</button>
      </div>
    </form>
  );
}
