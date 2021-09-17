import { AuthenticateModel, UserModel } from '~/data/models';

export type PropsAuthContext = {
  user?: UserModel;
  isLoading: boolean;
  login: (authenticate: AuthenticateModel) => void;
  logout: () => void;
};
