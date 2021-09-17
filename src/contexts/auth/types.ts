import { AuthenticateModel, UserModel } from '~/data/models';

export type PropsAuthContext = {
  user?: UserModel;
  isLoggedIn: boolean;
  login: (authenticate: AuthenticateModel) => Promise<void>;
  logout: () => void;
};
