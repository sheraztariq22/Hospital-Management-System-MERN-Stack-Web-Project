import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageComponent from "../components/landingPage/landing";
import Dashboard from "../layouts/dashboradLayout/dashboard";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
