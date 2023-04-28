import { Post, PostType } from "@/components/post";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://nnd-backend.up.railway.app/posts?published=true",
        {
          mode: "cors",
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error(
          `Couldn't fetch posts, error ${response.status}, please contact the owner`
        );
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return <Post {...post} key={post._id}></Post>;
      })}
    </div>
  );
}
