import { CommentType } from "@/types/comment";
import { CommentView } from "./view";

export type CommentSectionProps = {
  comments: CommentType[];
};

export const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <section>
      {comments.map((comment) => (
        <CommentView key={comment._id} {...comment}></CommentView>
      ))}
    </section>
  );
};
