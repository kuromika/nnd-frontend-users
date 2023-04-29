import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type AuthContextType = {
  setAuth: (newToken: string) => void;
  isAuth: () => boolean;
  token: string | null;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const setAuth = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const isAuth = () => {
    return !!token;
  };

  return (
    <AuthContext.Provider value={{ setAuth, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};
