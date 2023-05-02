import { Post } from "@/components/post";
import { AuthContext } from "@/contexts/auth-context";
import { CommentEditor } from "@/features/comments/editor";
import styles from "@/styles/pages/Post.module.css";
import { CommentType } from "@/types/comment";
import { PostType } from "@/types/post";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

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
  const [comments, setComments] = useState<CommentType[]>([]);
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://nnd-backend.up.railway.app/posts/${pid}/comments`,
        {
          mode: "cors",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error(
          `Couldn't fetch this post commends, error ${response.status}`
        );
      }
    };

    fetchComments();
  }, [pid]);

  return (
    <div className={styles.container}>
      <Post {...props}></Post>
      <CommentEditor postId={pid as string} token={auth.token}></CommentEditor>
    </div>
  );
}
