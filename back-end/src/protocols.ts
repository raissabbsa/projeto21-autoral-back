export type ApplicationError = {
  name: string;
  message: string;
};

export type User = {
  id: number;
  name: string,
  email: string;
  password: string;
  createdAt: Date;
};
