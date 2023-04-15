import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuthenticated }) => {
	if (!isAuthenticated) {
		return <Navigate to="/signin" />;
	}

	return <Outlet />;
};

export default ProtectedRoutes;
