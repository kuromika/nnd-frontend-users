import { useFetchPosts } from "@/hooks/useFetchPosts";
import { PostCard } from "./post-card";
import styles from "@/styles/features/posts/PostBoard.module.css";

export const PostBoard = () => {
  const posts = useFetchPosts();

  return (
    <div className={styles.board}>
      {posts.map((post) => {
        return <PostCard key={post._id} {...post}></PostCard>;
      })}
    </div>
  );
};
