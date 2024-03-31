import "../input/input.css";
import "./delete.css";
import { LuSearch } from "react-icons/lu";
import FormInputs from "../formInputs";
import TableList from "../tableList";
import { useState } from "react";
import axios from "axios";

const DeleteUserForm = () => {
  const [searchUser, setSearchUser] = useState({
    role: "",
    firstName: "",
    email: "",
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to search a staff member by name, role, or email and connect to the backend
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchUser);
    axios
      .post(
        "http://localhost:5000/api/v1/admin/staff/searchStaff",
        searchUser,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        setSearchResults(response.data);
        alert("Staff found");
        setSearchUser({});
      })
      .catch((error) => {
        console.log(error);
        setSearchResults([]);
        alert("Staff not found");
      });
  };

  return (
    <div className="padDivSty">
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="search"
          name="firstName"
          id="1"
          placeholder="search staff"
          iconUrl={<LuSearch />}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      <TableList staffMembers={searchResults} />
    </div>
  );
};

export default DeleteUserForm;
