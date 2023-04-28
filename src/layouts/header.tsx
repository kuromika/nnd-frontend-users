import { Navigation } from "./nav-bar";
import styles from "@/styles/layouts/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation></Navigation>
    </header>
  );
};
