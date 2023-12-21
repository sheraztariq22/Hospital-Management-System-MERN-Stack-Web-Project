import "../input/input.css";
import "./delete.css";
import { LuSearch } from "react-icons/lu";
import FormInputs from "../formInputs";
import TableList from "../tableList";

const DeleteUserForm = () => {
  return (
    <div className="padDivSty">
      <FormInputs
        type="search"
        name="searchUser"
        id="1"
        placeholder="search user"
        iconUrl={<LuSearch />}
      />

      <TableList />
    </div>
  );
};

export default DeleteUserForm;
