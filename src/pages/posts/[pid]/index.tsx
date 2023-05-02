import { Post } from "@/components/post";
import { AuthContext } from "@/contexts/auth-context";
import { CommentEditor } from "@/features/comments/editor";
import styles from "@/styles/pages/Post.module.css";
import { PostType } from "@/types/post";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";

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
  const auth = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Post {...props}></Post>
      <CommentEditor
        postId={router.query.pid as string}
        token={auth.token}
      ></CommentEditor>
    </div>
  );
}
