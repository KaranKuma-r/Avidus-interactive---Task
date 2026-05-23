import { Link } from "react-router-dom";

import "../../styles/navbar.css";

import { useDispatch } from "react-redux";

import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    dispatch(logout());

    window.location.href =
      "/login";
  };

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>

      <div className="nav-links">
        <Link to="/">
          Dashboard
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

        {user?.role === "Admin" && (
          <>
            <Link to="/admin">
              Admin
            </Link>

            <Link to="/users">
              Users
            </Link>

            <Link to="/activity">
              Logs
            </Link>
          </>
        )}

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;