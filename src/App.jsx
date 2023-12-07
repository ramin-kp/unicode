import routes from "./routes";
import { useRoutes } from "react-router-dom";
import UserContext from "./context/UserContext/UserContext";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const router = useRoutes(routes);

  const login = (userInfos, token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("user", JSON.stringify({ token }));
    setUserInfos(userInfos);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setToken(false);
    localStorage.removeItem("user");
    setUserInfos({});
  };
  useEffect(() => {
    userAuthentication();
  }, [isLoggedIn]);
  const userAuthentication = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      const fetchData = await fetch("http://localhost:4000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      });
      const userData = await fetchData.json();
      setIsLoggedIn(true);
      setUserInfos(userData);
    } else {
      setIsLoggedIn(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </UserContext.Provider>
  );
}

export default App;
