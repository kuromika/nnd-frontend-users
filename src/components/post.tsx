import { convertToHtml } from "@/services/transform-markdown";
import styles from "@/styles/components/Post.module.css";
import { PostMetaType, PostType } from "@/types/post";
import { format, formatDistance } from "date-fns";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Post = ({
  post,
  meta,
}: {
  post: PostType;
  meta: PostMetaType;
}) => {
  const [html, setHtml] = useState<TrustedHTML | string>("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const postDate = new Date(post.date);
    const formattedDate = `${format(postDate, "yyyy/MM/dd")} (${formatDistance(
      postDate,
      new Date(),
      {
        addSuffix: true,
      }
    )})`;
    setDate(formattedDate);
    const convertContent = async () => {
      const parsed = matter(post.content);
      const transformed = await convertToHtml(parsed.content);
      setHtml(transformed);
    };

    convertContent();
  }, [post.content, post.date]);

  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <Link href={`/posts/${post._id}`}>
          <div className={styles.info}>
            <h1>{meta.title}</h1>
            <p className={styles.date}>{date}</p>
          </div>
        </Link>
        <img src={meta.image} alt="Post header image"></img>
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </article>
  );
};
