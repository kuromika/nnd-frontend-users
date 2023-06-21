import { Post } from "@/components/post";
import { Protected } from "@/components/protected";
import { AuthContext } from "@/contexts/auth-context";
import { CommentSection } from "@/features/comments/comment-section";
import { CommentEditor } from "@/features/comments/editor";
import styles from "@/styles/pages/Post.module.css";
import { CommentType } from "@/types/comment";
import { PostMetaType, PostType } from "@/types/post";
import matter from "gray-matter";
import { NextPageContext } from "next";
import Head from "next/head";
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
  const meta = matter(data).data;

  return {
    props: { post: data, meta },
  };
}

export default function PostPage({
  post,
  meta,
}: {
  post: PostType;
  meta: PostMetaType;
}) {
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

  const handleAddComment = (comment: CommentType) => {
    setComments((prev) => [comment, ...prev]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link href="/icon.ico" rel="shortcut icon"></link>
        <link href="/icon.ico" rel="icon"></link>
        <title>{meta.title}</title>
        <meta property="description" content={meta.description} />
        <meta property="og:title" content={meta.title}></meta>
        <meta
          property="og:url"
          content={`https://natsu-no-daisankaku.vercel.app/posts/${pid}`}
        ></meta>
        <meta property="og:image" content={meta.image}></meta>
        <meta name="og:image:alt" content="Post's header image"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:description" content={meta.description}></meta>

        <meta name="twitter:title" content={meta.title}></meta>
        <meta name="twitter:description" content={meta.description}></meta>
        <meta name="twitter:image" content={meta.image}></meta>
        <meta name="twitter:image:alt" content="Post's header image"></meta>
      </Head>
      <Post post={post} meta={meta} />
      <Protected text="comment" route={encodeURIComponent(`/posts/${pid}`)}>
        <CommentEditor
          postId={pid as string}
          token={auth.token}
          addComment={handleAddComment}
        ></CommentEditor>
      </Protected>
      <CommentSection comments={comments}></CommentSection>
    </div>
  );
}
