import { useState } from "react";
import FormInputs from "../formInputs";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import FormButton from "../formButton";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    console.log(e.target.value);
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
      console.log(JSON.stringify(formData));
      const response = await fetch(
        "http://localhost:3000/api/v1/admin/staff/addStaff",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Staff added successfully!");
        setFormData({});
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
          name="firstName"
          id="1"
          placeholder="First Name"
          iconUrl={<LuUser2 />}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="lastName"
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
