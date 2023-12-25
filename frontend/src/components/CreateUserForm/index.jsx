import { useState } from "react";
import FormInputs from "../formInputs";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import FormButton from "../formButton";

// ... (imports)

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data:", formData);
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/staff/addStaff",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzAzNDM4Mjk3LCJleHAiOjE3MDQzMDIyOTd9.7RqyqIHKDYXTO8ylCh6OQrSJOEyiB1lFFLlkwzKy_OA`, // Replace with a valid access token
          },
          credentials: "include",
          body: JSON.stringify({
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          }),
        }
      );

      if (response.ok) {
        console.log("Staff added successfully!");
        // Reset the form or redirect to another page if needed
      } else {
        const errorData = await response.json();
        console.error("Failed to add staff:", errorData);
      }
    } catch (error) {
      console.error("Error adding staff:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          name="firstname"
          id="1"
          placeholder="First Name"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="lastname"
          id="2"
          placeholder="Last Name"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormInputs
          type="email"
          name="email"
          id="3"
          placeholder="User Email"
          iconUrl={<MdOutlineMail />}
          onChange={handleChange}
        />
        <FormInputs
          type="password"
          name="password"
          id="4"
          placeholder="User Password"
          iconUrl={<CiLock />}
          iconAlt="user password"
          max="16"
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="role"
          id="6"
          placeholder="Role"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormButton button="Add New Staff" />
      </form>
    </>
  );
};

export default CreateUserForm;
