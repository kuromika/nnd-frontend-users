import { AuthContext } from "@/contexts/auth-context";
import Link from "next/link";
import { ReactNode, useContext } from "react";
import styles from "@/styles/components/Protected.module.css";

export type ProtectedProps = {
  children: ReactNode;
  text: string;
  route: string;
};

export const Protected = ({ children, text, route }: ProtectedProps) => {
  const auth = useContext(AuthContext);

  return (
    <>
      {auth.isAuth() ? (
        children
      ) : (
        <div className={styles.container}>
          <p>
            You need to <Link href={`/auth/login?from=${route}`}>Log in</Link>{" "}
            to be able to {text}
          </p>
        </div>
      )}
    </>
  );
};
