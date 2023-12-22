import React from "react";
import FormInputs from "../formInputs";
import { IoLink } from "react-icons/io5";
import FormButton from "../formButton/index";

const PatientLink = () => {
  return (
    <form>
      <FormInputs
        type="text"
        id="1"
        placeholder="Patient Appointment Url"
        iconUrl={<IoLink />}
      />
      <FormInputs
        type="text"
        id="2"
        placeholder="Patient Medical form Url"
        iconUrl={<IoLink />}
      />
      <FormInputs
        type="text"
        id="3"
        placeholder="Patient Reports Url"
        iconUrl={<IoLink />}
      />
      <FormButton button="Send Link" />
    </form>
  );
};

export default PatientLink;
