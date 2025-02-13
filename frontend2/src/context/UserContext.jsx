import { createContext, useState, useEffect } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      axios
        .get("http://localhost:5000/api/user/getuser")
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  const registration = async (credentials) => {
    await axios.post("http://localhost:5000/api/user/signup", credentials);
  };

  const login = async (credentials) => {
    const res = await axios.post(
      "http://localhost:5000/api/user/signin",
      credentials
    );
    localStorage.setItem("token", res.data.token);
    setAuthToken(res.data.token);
    setUser(res.data.user);
  };
  const logout = async () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, registration, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
