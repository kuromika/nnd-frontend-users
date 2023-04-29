import { Modal } from "@/components/modal";
import styles from "@/styles/layouts/Navigation.module.css";
import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <div>
            <Link href="/auth/login">Log in</Link>
            <Link href="/auth/signup">Sign up</Link>
          </div>
        </Modal>
      )}
    </nav>
  );
};
