import FormInputs from "../formInputs";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import FormButton from "../formButton";
const CreateUserForm = () => {
  return (
    <>
      <form>
        <FormInputs
          type="text"
          name="firstname"
          id="1"
          placeholder="use name (required)"
          iconUrl={<LuUser2 />}
        />
        <FormInputs
          type="text"
          name="lastname"
          id="2"
          placeholder="Last Name"
          iconUrl={<LuUser2 />}
        />
        <FormInputs
          type="email"
          name="gmail"
          id="3"
          placeholder="User Gmail"
          iconUrl={<MdOutlineMail />}
        />
        <FormInputs
          type="password"
          name="userpassword"
          id="4"
          placeholder="User Password"
          iconUrl={<CiLock />}
          iconAlt="user password"
          max="16"
        />
        <FormButton button="Add New User" />
      </form>
    </>
  );
};
export default CreateUserForm;
