import { convertToHtml } from "@/services/transform-markdown";
import styles from "@/styles/components/Post.module.css";
import { PostMetaType, PostType } from "@/types/post";
import { format, formatDistance } from "date-fns";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Post = ({ post }: { post: PostType }) => {
  const [html, setHtml] = useState<TrustedHTML | string>("");
  const postDate = new Date(post.date);
  const formattedDate = `${format(postDate, "yyyy/MM/dd")} (${formatDistance(
    postDate,
    new Date(),
    {
      addSuffix: true,
    }
  )})`;
  const [meta, setMeta] = useState<PostMetaType>({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const convertContent = async () => {
      const parsed = matter(post.content);
      const metaData = parsed.data as PostMetaType;
      setMeta(metaData);
      const transformed = await convertToHtml(parsed.content);
      setHtml(transformed);
    };

    convertContent();
  }, [post.content]);

  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <Link href={`/posts/${post._id}`}>
          <div className={styles.info}>
            <h1>{meta.title}</h1>
            <p className={styles.date}>{formattedDate}</p>
          </div>
        </Link>
        <img src={meta.image} loading="lazy" alt="Post header image"></img>
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </article>
  );
};
