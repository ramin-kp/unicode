import React from "react";
import { useContext } from "react";
import UserContext from "./../../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

export default function PAdminRoute({ children }) {
  const userData = useContext(UserContext);
  console.log(children);
  const navigate = useNavigate();
  return <>{userData.userInfos.role === "ADMIN" ? children : navigate("/login")}</>;
}
