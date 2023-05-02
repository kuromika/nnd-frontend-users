import { Post } from "@/components/post";
import styles from "@/styles/pages/Post.module.css";
import { PostType } from "@/types/post";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const { pid } = context.query;
  const response = await fetch(
    `https://nnd-backend.up.railway.app/posts/${pid}`
  );

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const data = await response.json();

  return {
    props: { ...data },
  };
}

export default function PostPage(props: PostType) {
  return (
    <div className={styles.container}>
      <Post {...props}></Post>
    </div>
  );
}
