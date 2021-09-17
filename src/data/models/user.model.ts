import { BaseModel } from './base.model';

export type UserModel = BaseModel & {
  name?: string;
  username?: string;
  email?: string;
  token?: string;
};
