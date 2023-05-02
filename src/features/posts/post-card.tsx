import { PostType } from "@/types/post";
import matter from "gray-matter";
import Link from "next/link";
import styles from "@/styles/features/posts/PostCard.module.css";

export const PostCard = (props: PostType) => {
  const { data } = matter(props.content);

  return (
    <article className={styles.card}>
      <Link href={`/posts/${props._id}`} className={styles.anchor}>
        <div className={styles.content}>
          <img src={data.image} alt="Article's image"></img>
          <div className={styles.text}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};
