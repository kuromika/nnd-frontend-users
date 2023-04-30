import { Modal } from "@/components/modal";
import { AuthContext } from "@/contexts/auth-context";
import styles from "@/styles/layouts/Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export const Navigation = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const hideModal = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeComplete", hideModal);
  }, [router.events]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={`${styles["menu-button"]} ${
          isOpen ? styles.open : styles.closed
        }`}
        aria-label="Menu button"
        onClick={handleClick}
      ></button>
      {isOpen && (
        <Modal>
          <div className={styles.links}>
            <Link href="/">Top</Link>
            {!auth.isAuth() && (
              <>
                <Link href="/auth/login">Log in</Link>
                <Link href="/auth/signup">Sign up</Link>
              </>
            )}
            <Link href="/posts">Posts</Link>
            {auth.isAuth() && (
              <button className={styles.logout} onClick={auth.logOut}>
                Log out
              </button>
            )}
            <Link href="/about">About</Link>
          </div>
        </Modal>
      )}
    </nav>
  );
};
