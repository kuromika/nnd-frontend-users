import { CommentType } from "@/types/comment";
import styles from "@/styles/features/comments/View.module.css";

export const CommentView = (comment: CommentType) => {
  return (
    <div className={styles.comment}>
      <div>
        <h2>{comment.user.username}</h2>
        <p>{comment.date}</p>
      </div>
      <p>{comment.content}</p>
    </div>
  );
};
