import { useState } from "react";


export function AddUserTable(props) {

  const [value, setValue] = useState("");

  return (
    <form className="modal_content hover:bg-amber-200 font-medium">
      <div className="flex g-3 flex-col">
        <label>Name</label>
        <input
          value={value}
          className=""
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>user name</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Street</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Suite</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="">city</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Zipcode</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Phone</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Website</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Company name</label>
        <input
          value={value}
          className="table-text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <button
          className="btn border bg-gray-200 p-1"
          onSubmit={() => addUser()}
        >
          Create new user
        </button>
        <button className="btn border bg-red-200 p-1">Cancel</button>
      </div>
    </form>
  );
}
