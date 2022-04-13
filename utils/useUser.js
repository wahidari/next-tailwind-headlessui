import { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const systemToken = localStorage.getItem("token");
    if (!systemToken) {
      return;
    }
    fetchData();
    async function fetchData() {
      try {
        const user = jwt.decode(systemToken, process.env.JWT_SECRET);
        const { data } = await axios.post("/api/login", user);
        if (user) {
          setUsername(user.username);
          setToken(data.data.token);
        } else {
          localStorage.removeItem("token");
          console.log("initial login error");
        }
      } catch (e) {
        localStorage.removeItem("token");
        console.log("error calling api to start context");
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, token, setToken }} >
      {children}
    </UserContext.Provider>
  );
};