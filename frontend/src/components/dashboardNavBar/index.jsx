import "./style.css";
const DashboardNavBar = ({ tabs, actionTab, onTabChange }) => {
  const handleClick = (index) => {
    onTabChange(index);
  };

  return (
    <ul className="navLinks">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={actionTab === tab.id ? "activeNvaLink" : "navLink"}
          onClick={() => handleClick(tab.id)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default DashboardNavBar;
