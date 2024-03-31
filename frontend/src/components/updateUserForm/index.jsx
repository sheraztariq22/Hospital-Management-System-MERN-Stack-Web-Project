import FormInputs from "../formInputs/index";
import { MdOutlineMail } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import FormButton from "../formButton/index";
import { useState } from "react";
import axios from "axios";

const UpdateUserForm = () => {
  const [formData, setFormData] = useState({
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/admin/staff/updateStaff/${formData._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          name="_id"
          value={formData._id}
          onChange={handleChange}
          iconUrl={<FaUserEdit />}
          placeholder="User ID (to be updated)"
        />
        <FormInputs
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          iconUrl={<MdOutlineMail />}
          placeholder="Email (to be updated)"
        />
        <FormInputs
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          iconUrl={<LuUser2 />}
          placeholder="First Name (to be updated)"
        />
        <FormInputs
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          iconUrl={<LuUser2 />}
          placeholder="Last Name (to be updated)"
        />
        <FormInputs
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          iconUrl={<CiLock />}
          placeholder="New Password (to be updated)"
        />
        <FormInputs
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          iconUrl={<CiLock />}
          placeholder="Confirm Password (to be updated)"
        />
        <FormButton button="Update" />
      </form>
    </>
  );
};

export default UpdateUserForm;
