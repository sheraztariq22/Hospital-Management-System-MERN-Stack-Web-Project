import React from "react";
import { FaUser } from "react-icons/fa";
import FormInputs from "../formInputs";
import { FaAddressCard } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import FormButton from "../formButton/index";

const AddPatient = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          id="1"
          placeholder="Patient Name"
          iconUrl={<FaUser />}
        />
        <FormInputs
          type="number"
          id="2"
          placeholder="Patient ID"
          iconUrl={<FaAddressCard />}
        />
        <FormInputs
          type="number"
          id="3"
          placeholder="Patient Room Number"
          iconUrl={<MdMeetingRoom />}
        />
        <FormInputs
          type="number"
          id="4"
          placeholder="Patient Room Number"
          iconUrl={<FaPhoneAlt />}
        />
        <FormInputs
          type="text"
          id="5"
          placeholder="Patient Attendant Name"
          iconUrl={<FaUser />}
        />
        <FormButton button="Add Patient" />
      </form>
    </>
  );
};

export default AddPatient;
