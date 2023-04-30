export type SimpleUser = {
  isAdmin: boolean;
  username: string;
  _id: string;
};

export type CompleteUser = SimpleUser & {
  hash: string;
  salt: string;
  __v: number;
};

export type AuthUser = SimpleUser & {
  token: string;
};
