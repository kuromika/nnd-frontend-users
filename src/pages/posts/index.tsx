import { DefaultHead } from "@/components/default-head";
import { PostBoard } from "@/features/posts/post-board";
import styles from "@/styles/pages/Posts.module.css";
import Head from "next/head";

export default function Posts() {
  return (
    <div className={styles.container}>
      <DefaultHead>
        <title>Natsu no Daisankaku - Blog Posts</title>
      </DefaultHead>
      <PostBoard></PostBoard>
    </div>
  );
}
