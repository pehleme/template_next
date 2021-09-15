import toast from 'react-hot-toast';

import { api } from '~/configs/api.service';
import { AuthenticateModel, UserModel } from '~/data/models';
import { cookie, CookieItemEnum } from '~/utils';

const currentUser = (): UserModel | undefined => {
  return cookie.get<UserModel>(CookieItemEnum.Auth);
};

const isLoggedIn = !!currentUser();

const signIn = async (authenticate: AuthenticateModel): Promise<void> => {
  api
    .post<UserModel>('/login', authenticate)
    .then(({ data }) => {
      cookie.set<UserModel>(CookieItemEnum.Auth, data);
      if (data.token) {
        cookie.set<string>(CookieItemEnum.Auth, data.token);
      }
      toast.success('Login realizado com sucesso');
    })
    .catch(() => {
      toast.error('Erro ao realizar login');
    });
};

const signOut = async (): Promise<void> => {
  cookie.remove(CookieItemEnum.Auth);
  cookie.remove(CookieItemEnum.Token);
};

export const authService = { isLoggedIn, currentUser, signIn, signOut };
