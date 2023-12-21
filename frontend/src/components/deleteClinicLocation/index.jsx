import React from "react";
import { GrLocation } from "react-icons/gr";
import { BiClinic } from "react-icons/bi";

import FormInputs from "../formInputs";
import FormButton from "../formButton/index";
const DeleteClinicLoctaion = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          id="1"
          placeholder="Clinic Name"
          iconUrl={<BiClinic />}
        />
        <FormInputs
          type="text"
          id="2"
          placeholder="Clinic Location"
          iconUrl={<GrLocation />}
        />
        <FormButton button="Delete Location" />
      </form>
    </>
  );
};

export default DeleteClinicLoctaion;
