import Image from "next/image";
import styles from "@/styles/pages/About.module.css";
import Head from "next/head";
import { DefaultHead } from "@/components/default-head";

export default function About() {
  return (
    <section className={styles.content}>
      <DefaultHead>
        <title>About</title>
      </DefaultHead>
      <Image
        src="/nadeko.png"
        width={1910}
        height={900}
        alt="Nadeko from Monogatari"
      ></Image>
      <h1>About</h1>
      <p>
        Welcome to <a href="https://twitter.com/kuromika__">@kuromika</a>&apos;s
        personal blog!
      </p>
      <p>
        Here I will share my own delusions about diverse topics. You
        shouldn&apos;t take anything you read here personal or at face value,
        since most posts will be based on my personal experience or limited
        knowledge, like Hanekawa would say &quot;I don&apos;t know everything, I
        only know what I know&quot;.
      </p>
      <p>
        The name for this blog comes from a song by
        <a href="https://en.wikipedia.org/wiki/Supercell_(band)"> Supercell </a>
        called{" "}
        <a href="https://www.youtube.com/watch?v=eLPs_w-FepA&ab_channel=supercellVEVO">
          Kimino Shiranai Monogatari &#40;君の知らない物語&#41;
        </a>{" "}
        which is the first ending theme for the anime{" "}
        <a href="https://myanimelist.net/anime/5081/Bakemonogatari">
          Bakemonogatari
        </a>
        . In the song &quot;Natsu no Daisankaku&quot; is mentionded, and it
        means{" "}
        <a href="https://en.wikipedia.org/wiki/Summer_Triangle">
          Summer Triangle
        </a>
        .
      </p>
      <p>
        I love Supercell&apos;s work, Nagi Yanagi&apos;s voice and of course,
        Monogatari, that is why I decided that it would be the perfect name for
        my blog.
      </p>
      <h2>Me</h2>
      <p>
        I like to call myself a
        <a href="https://kuromika.vercel.app/"> full-stack developer</a>{" "}
        wannabe, and I wonder if there will be any day where I will confidently
        call myself one, there are many things to learn!
      </p>
      <p>
        My interestes include: coding, visual novels, monogatari, japanese music
        &#40;shoegaze, poprock, pop, rap&#41;, and more.
      </p>
      <p>
        If you&apos;re interested in my work or have any feedback about this
        blog, feel free to send me an{" "}
        <a href="mailto:kuromika.dev@gmail.com">email</a>.
      </p>
    </section>
  );
}
