import { DefaultHead } from "@/components/default-head";
import { Post } from "@/components/post";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import styles from "@/styles/pages/Home.module.css";
import { PostMetaType } from "@/types/post";
import matter from "gray-matter";

export default function Home() {
  const posts = useFetchPosts();

  return (
    <div className={styles.posts}>
      <DefaultHead>
        <title>Natsu no Daisankaku - Kuromika&apos;s Blog</title>
      </DefaultHead>
      {posts.map((post) => {
        const meta = matter(post);
        return (
          <Post
            post={post}
            meta={meta.data as PostMetaType}
            key={post._id}
          ></Post>
        );
      })}
    </div>
  );
}
