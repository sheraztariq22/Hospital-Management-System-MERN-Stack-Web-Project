// tabs.js
import CreateUserForm from "../CreateUserForm";
import UpdateUserForm from "../updateUserForm";
import DeleteUserForm from "../deleteUserForm";

export const tabs = [
  { id: 1, label: "Add Staff", component: <CreateUserForm /> },
  { id: 2, label: "update staff info ", component: <UpdateUserForm /> },
  { id: 3, label: "staff's list", component: <DeleteUserForm /> },
];

// titlesAndDescriptions.js
export const titlesAndDescriptions = [
  {
    id: 1,
    title: "Add New Staff",
    description: "Create a brand new user and add them to this site.",
  },
  {
    id: 2,
    title: "Update Staff info",
    description: "Here you can Update the data.",
  },
  {
    id: 3,
    title: "Staff's List",
    description: "Here you can see the list and delete the data.",
  },
  {
    id: 4,
    title: "Search Staff",
    description: "Here you can Search the data.",
  },
];
