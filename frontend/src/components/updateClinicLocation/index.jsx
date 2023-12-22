import React from "react";
import FormInputs from "../formInputs";
import { BiClinic } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import FormButton from "../formButton/index";

const UpdateClinicLocation = () => {
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
          placeholder="Clinic Previous Address"
          iconUrl={<GrLocation />}
        />
        <FormInputs
          type="text"
          id="3"
          placeholder="Clinic New Address"
          iconUrl={<GrLocation />}
        />
        <FormButton button="Update Location" />
      </form>
    </>
  );
};

export default UpdateClinicLocation;
