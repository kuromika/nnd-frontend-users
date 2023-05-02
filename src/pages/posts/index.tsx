import { PostBoard } from "@/features/posts/post-board";
import styles from "@/styles/pages/Posts.module.css";

export default function Posts() {
  return (
    <div className={styles.container}>
      <PostBoard></PostBoard>
    </div>
  );
}
