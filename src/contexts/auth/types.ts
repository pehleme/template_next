import { AuthenticateModel, UserModel } from '~/data/models';

export type PropsAuthContext = {
  user?: UserModel;
  isLoading: boolean;
  login: (authenticate: AuthenticateModel) => void;
  logout: () => void;
};

export const DEFAULT_VALUE: PropsAuthContext = {
  user: undefined,
  isLoading: false,
  login: () => {
    // do nothing;
  },
  logout: () => {
    // do nothing;
  },
};
