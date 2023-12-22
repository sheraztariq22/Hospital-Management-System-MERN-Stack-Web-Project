import FormInputs from "../formInputs/index";
import { MdOutlineMail } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { FaUserEdit } from "react-icons/fa";
import FormButton from "../formButton/index";
const UpdateUserForm = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          id="1"
          name="username"
          iconUrl={<FaUserEdit />}
          placeholder="user name (to be update)"
        />
        <FormInputs
          type="email"
          id="2"
          name="email"
          iconUrl={<MdOutlineMail />}
          placeholder="email (to be update)"
        />
        <FormInputs
          type="text"
          name="first name"
          id="3"
          placeholder="first Name (to be update)"
          iconUrl={<LuUser2 />}
        />
        <FormInputs
          type="text"
          name="last name"
          id="4"
          placeholder="last Name (to be update)"
          iconUrl={<LuUser2 />}
        />
        <FormInputs
          type="password"
          name="New password"
          id="5"
          placeholder="New password (to be update)"
          iconUrl={<CiLock />}
        />
        <FormInputs
          type="password"
          name="Confirm password"
          id="6"
          placeholder="Confirm password (to be update)"
          iconUrl={<CiLock />}
        />
        <FormButton button="Update" />
      </form>
    </>
  );
};

export default UpdateUserForm;
