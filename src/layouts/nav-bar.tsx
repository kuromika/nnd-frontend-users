import { Modal } from "@/components/modal";
import styles from "@/styles/layouts/Navigation.module.css";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles["menu-button"]}
        aria-label="Menu button"
        onClick={handleClick}
      ></button>
      {isOpen && (
        <Modal>
          <div>
            <h1>hello world</h1>
          </div>
        </Modal>
      )}
    </nav>
  );
};