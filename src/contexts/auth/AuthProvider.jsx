import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ----- Carregar usuário do LocalStorage ao abrir o app ------
  useEffect(() => {
    const storedUser = localStorage.getItem("eventup_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ----- LOGIN -----
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("eventup_user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUser(storedUser);
      return { success: true };
    }

    return { success: false, message: "Email or password incorrect" };
  };

  // ----- CADASTRO -----
  const register = (data) => {
    localStorage.setItem("eventup_user", JSON.stringify(data));
    setUser(data);
  };

  // ----- LOGOUT -----
  const logout = () => {
    setUser(null);
    localStorage.removeItem("eventup_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
