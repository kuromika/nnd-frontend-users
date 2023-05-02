import { CommentType } from "@/types/comment";
import { CommentView } from "./view";
import styles from "@/styles/features/comments/Section.module.css";

export type CommentSectionProps = {
  comments: CommentType[];
};

export const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <section className={styles.section}>
      {comments.map((comment) => (
        <CommentView key={comment._id} {...comment}></CommentView>
      ))}
    </section>
  );
};
