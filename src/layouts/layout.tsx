import { PropsWithChildren } from "react";
import { Header } from "./header";
import { AuthProvider } from "@/contexts/auth-context";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <main>{children}</main>
      </AuthProvider>
    </>
  );
};
