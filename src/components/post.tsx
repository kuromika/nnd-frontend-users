import styles from "@/styles/components/Post.module.css";
import { formatDistance } from "date-fns";
import matter from "gray-matter";
import { useEffect, useState } from "react";
import rehypeStringify from "rehype-stringify/lib";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype/lib";
import { unified } from "unified";

export type PostType = {
  _id: string;
  content: string;
  isPublished: boolean;
  user: string;
  __v: number;
  date: string;
};

export type PostMetaType = {
  title: string;
  description?: string;
  image: string;
};

export const Post = (props: PostType) => {
  const [html, setHtml] = useState<TrustedHTML | string>("");
  const meta = matter(props.content);

  useEffect(() => {
    const convertContent = async () => {
      const content = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(meta.content);
      setHtml(content);
    };

    convertContent();
  }, [meta.content]);

  return (
    <article className={styles.post}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h1>{meta.data.title}</h1>
          <p className={styles.date}>
            {formatDistance(new Date(props.date), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
        <img src={meta.data.image}></img>
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </article>
  );
};
