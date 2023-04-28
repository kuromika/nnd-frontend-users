export type PostType = {
  _id: string;
  content: string;
  isPublished: boolean;
  user: string;
  __v: number;
  date: string;
};

export const Post = (props: PostType) => {
  return <article>{props.content}</article>;
};
