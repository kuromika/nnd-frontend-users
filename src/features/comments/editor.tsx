import { ChangeEvent, FormEvent, useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={handleChange}></textarea>
        <button type="submit" disabled={loading}>
          Comment
        </button>
      </form>
      <p>{notification}</p>
    </div>
  );
};
