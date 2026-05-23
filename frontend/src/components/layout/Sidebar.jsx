import { Link } from "react-router-dom";

import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link to="/">
          Dashboard
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

        <Link to="/users">
          Users
        </Link>

        <Link to="/activity">
          Activity Logs
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;