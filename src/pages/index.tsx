import { DefaultHead } from "@/components/default-head";
import { Post } from "@/components/post";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import styles from "@/styles/pages/Home.module.css";
import Head from "next/head";

export default function Home() {
  const posts = useFetchPosts();

  return (
    <div className={styles.posts}>
      <DefaultHead>
        <title>Natsu no Daisankaku</title>
      </DefaultHead>
      {posts.map((post) => {
        return <Post {...post} key={post._id}></Post>;
      })}
    </div>
  );
}
