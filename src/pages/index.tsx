import { Post } from "@/components/post";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  const posts = useFetchPosts();

  return (
    <div className={styles.posts}>
      {posts.map((post) => {
        return <Post {...post} key={post._id}></Post>;
      })}
    </div>
  );
}
