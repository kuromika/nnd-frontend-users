import { CommentType } from "@/types/comment";
import styles from "@/styles/features/comments/View.module.css";
import { format } from "date-fns";

export const CommentView = (comment: CommentType) => {
  const formatteDate = format(new Date(comment.date), "d MMMM yyyy");
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <h1>{comment.user.username}</h1>
        <p className={styles.date}>{formatteDate}</p>
      </div>
      <p className={styles.content}>{comment.content}</p>
    </div>
  );
};
