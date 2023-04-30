import { PropsWithChildren } from "react";
import { Header } from "./header";
import { AuthProvider } from "@/contexts/auth-context";
import styles from '@/styles/layouts/Layout.module.css'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <main className={styles.main}>{children}</main>
      </AuthProvider>
    </>
  );
};
