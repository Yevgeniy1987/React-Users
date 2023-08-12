export function AddUserTable({ setUsers }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const username = form.username.value;
    const email = form.email.value;
    const street = form.street.value;
    const suite = form.suite.value;
    const city = form.city.value;
    const zipcode = form.zipcode.value;
    const phone = form.phone.value;
    const website = form.website.value;
    const companyName = form.companyName.value;

    const newUser = {
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },

      phone,
      website,
      company:{
        name: companyName,
      },
    };

    setUsers((users) => [...users,newUser]);
    
  };
  return (
    <form
      className="hover:bg-amber-200 font-medium"
      onSubmit={handleSubmit}
    >
      <div className="flex g-3 flex-col">
        <label htmlFor="name">Name</label>
        <input name="name" className="table-text" id="name" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="username">user name</label>
        <input name="userName" className="table-text" id="username" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="email">Email</label>
        <input name="email" className="table-text" id="email" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="street">Street</label>
        <input name="street" className="table-text" id="street" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="suite">Suite</label>
        <input name="suite" className="table-text" id="suite" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="city">city</label>
        <input name="city" className="table-text" id="city" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="zipcode">Zipcode</label>
        <input name="zipcode" id="zipcode" className="table-text" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="phone">Phone</label>
        <input name="phone" className="table-text" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="website">Website</label>
        <input name="website" className="table-text" />
      </div>
      <div className="flex g-3 flex-col">
        <label htmlFor="companyName">Company name</label>
        <input name="companyName" className="table-text" />
      </div>
      <div className="flex g-3">
        <button
          className="btn border bg-gray-200 p-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          Create new user
        </button>
        <button className="btn border bg-red-200 p-1">Cancel</button>
      </div>
    </form>
  );
}
