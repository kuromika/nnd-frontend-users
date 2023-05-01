import Image from "next/image";
import styles from "@/styles/pages/About.module.css";

export default function About() {
  return (
    <section className={styles.content}>
      <Image
        src="/nadeko.png"
        width={1910}
        height={900}
        alt="Nadeko from Monogatari"
      ></Image>
      <h1>About</h1>
      <p>
        Welcome to <a href="https://twitter.com/kuromika__">Kuromika</a>&apos;s
        personal blog.
      </p>
    </section>
  );
}
