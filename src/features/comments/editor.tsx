import { ChangeEvent, FormEvent, useState } from "react";
import styles from "@/styles/features/comments/Editor.module.css";

export type CommentEditorProps = {
  postId: string;
  token: string | null;
};

export const CommentEditor = ({ postId, token }: CommentEditorProps) => {
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
        }),
        body,
      }
    );

    if (response.ok) {
      setComment("");
      setNotification("Comment added successfully");
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
