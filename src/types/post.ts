export type PostType = {
  _id: string;
  content: string;
  isPublished: boolean;
  user: string;
  __v: number;
  date: string;
};

export type PostMetaType = {
  title: string;
  description?: string;
  image: string;
};
