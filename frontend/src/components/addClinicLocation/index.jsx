import React from "react";
import FormInputs from "../formInputs/index";
import { BiClinic } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import FormButton from "../formButton/index";

const AddClinicLocation = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          id="1"
          placeholder="Clinic  Name"
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
        <FormButton button="Add New Location" />
      </form>
    </>
  );
};

export default AddClinicLocation;