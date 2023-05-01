import { PropsWithChildren } from "react";
import { Header } from "./header";
import styles from "@/styles/layouts/Layout.module.css";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </>
  );
};
