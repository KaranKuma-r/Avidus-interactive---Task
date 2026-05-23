import { Navigate } from "react-router-dom";

import toast from "react-hot-toast";

const AdminRoute = ({
  children,
}) => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // NOT LOGGED IN
  if (!user) {
    toast.error(
      "Please Login First"
    );

    return (
      <Navigate to="/login" />
    );
  }

  // NOT ADMIN
  if (user.role !== "Admin") {
    toast.error(
      "Only Admin Can Access This Page"
    );

    return (
      <Navigate to="/" />
    );
  }

  // ADMIN ACCESS
  return children;
};

export default AdminRoute;