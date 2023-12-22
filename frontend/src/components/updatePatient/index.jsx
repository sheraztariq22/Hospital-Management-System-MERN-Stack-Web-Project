import React from "react";
import FormInputs from "../formInputs/index";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import FormButton from "../formButton/index";

const UpdatePatient = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          id="1"
          placeholder="Patient Name (to be update)"
          iconUrl={<FaUser />}
        />
        <FormInputs
          type="number"
          id="2"
          placeholder="Patient ID (to be update)"
          iconUrl={<FaAddressCard />}
        />
        <FormInputs
          type="number"
          id="3"
          placeholder="Patient Room Number (to be update)"
          iconUrl={<MdMeetingRoom />}
        />
        <FormInputs
          type="number"
          id="4"
          placeholder="Patient Phone Number (to be update)"
          iconUrl={<FaPhoneAlt />}
        />
        <FormInputs
          type="text"
          id="5"
          placeholder="Patient Attendant Name (to be update)"
          iconUrl={<FaUser />}
        />
        <FormButton button="Update" />
      </form>
    </>
  );
};

export default UpdatePatient;
