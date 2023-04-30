import { useRouter } from "next/router";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export type AuthContextType = {
  setAuth: (newToken: string) => void;
  isAuth: () => boolean;
  token: string | null;
  logOut: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
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

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ setAuth, isAuth, token, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
