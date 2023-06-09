import { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/features/comments/Editor.module.css";
import { CommentType } from "@/types/comment";

export type CommentEditorProps = {
  postId: string;
  token: string | null;
  addComment: (comment: CommentType) => void;
};

export const CommentEditor = ({
  postId,
  token,
  addComment,
}: CommentEditorProps) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = JSON.stringify({
      content: comment,
    });

    const response = await fetch(
      `https://nnd-backend.up.railway.app/posts/${postId}/comments`,
      {
        mode: "cors",
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        body,
      }
    );

    if (response.ok) {
      const data = await response.json();
      setComment("");
      setNotification("Comment added successfully");
      addComment(data);
    } else {
      setNotification("Your comment couldn't be added, try again later");
    }

    setLoading(false);
  };

  return (
    <div className={styles.editor}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          value={comment}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Leave a comment..."
          required
          maxLength={500}
        ></textarea>
        <div className={styles.under}>
          {notification && (
            <p className={styles.notification}>{notification}</p>
          )}
          <button type="submit" disabled={loading} className={styles.submit}>
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};
