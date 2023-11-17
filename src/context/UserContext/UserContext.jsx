import { createContext } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  token: false,
  userInfos: null,
  login: () => {},
  logout: () => {},
});
export default UserContext;
