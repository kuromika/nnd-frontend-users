import { CompleteUser } from "./user";

export type CommentType = {
  _id: string;
  content: string;
  user: CompleteUser;
  post: string;
  date: string;
  __v: number;
};
