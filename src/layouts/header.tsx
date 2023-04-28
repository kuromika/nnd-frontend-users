import Link from "next/link";
import { Navigation } from "./nav-bar";
import styles from "@/styles/layouts/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation></Navigation>
      <Link href="/" className={styles.banner}>
        <span className={styles.romaji}>Natsu no Daisankaku</span>
        <span className={styles.kanji}>夏の大三角</span>
      </Link>
    </header>
  );
};
