import styles from "@/styles/components/Modal.module.css";
import { PropsWithChildren } from "react";

export const Modal = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.modal}>
        {" "}
        <div className={styles.content}> {children}</div>
      </div>
    </>
  );
};
