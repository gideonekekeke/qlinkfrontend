import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";


const PrivateRoute = ({ children }) => {
		const saveItem = JSON.parse(localStorage.getItem("dataUsers"));
	
	return <div>{saveItem ? children : <Navigate to='/register' />}</div>;
};

export default PrivateRoute;