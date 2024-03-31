import React from "react";
import FormInputs from "../formInputs/index";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import FormButton from "../formButton/index";
import { useState } from "react";
import axios from "axios";

const UpdatePatient = () => {
  const [patientData, setPatientData] = useState({
    patientName: "",
    _id: "",
    patientRoomNumber: "",
    patientContact: "",
    patientAttendentName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatientData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(patientData);
    axios
      .put(
        `http://localhost:5000/api/v1/admin/patient/updatePatient/${patientData._id}`,
        patientData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Patient Updated Successfully");
        setPatientData({});
      })
      .catch((error) => {
        console.log(error);
        alert("Patient Updation Failed");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          id="1"
          name="patientName"
          placeholder="Patient Name (to be update)"
          onChange={handleChange}
          iconUrl={<FaUser />}
        />
        <FormInputs
          id="2"
          placeholder="Patient ID (to be update)"
          name="_id"
          onChange={handleChange}
          iconUrl={<FaAddressCard />}
        />
        <FormInputs
          id="3"
          name="patientRoomNumber"
          placeholder="Patient Room Number (to be update)"
          onChange={handleChange}
          iconUrl={<MdMeetingRoom />}
        />
        <FormInputs
          id="4"
          placeholder="Patient Phone Number (to be update)"
          name="patientContact"
          onChange={handleChange}
          iconUrl={<FaPhoneAlt />}
        />
        <FormInputs
          type="text"
          id="5"
          placeholder="Patient Attendant Name (to be update)"
          name="patientAttendentName"
          onChange={handleChange}
          iconUrl={<FaUser />}
        />
        <FormButton button="Update" />
      </form>
    </>
  );
};

export default UpdatePatient;
