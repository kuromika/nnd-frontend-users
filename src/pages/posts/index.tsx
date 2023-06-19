import { PostBoard } from "@/features/posts/post-board";
import styles from "@/styles/pages/Posts.module.css";
import Head from "next/head";

export default function Posts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natsu no Daisankaku | Posts</title>
      </Head>
      <PostBoard></PostBoard>
    </div>
  );
}
