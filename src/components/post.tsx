import styles from "@/styles/components/Post.module.css";
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
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </article>
  );
};
