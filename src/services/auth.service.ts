import toast from 'react-hot-toast';

import { api } from '~/config/api.service';
import { AuthenticateModel, UserModel } from '~/data/models';
import { cookie, CookieItemEnum } from '~/utils';

const signIn = async (authenticate: AuthenticateModel): Promise<void> => {
  api
    .post<UserModel>('/login', authenticate)
    .then((res) => {
      cookie.set<UserModel>(CookieItemEnum.Auth, res.data);
      toast.success('Login realizado com sucesso');
    })
    .catch(() => {
      toast.error('Erro ao realizar login');
    });
};

const signOut = async (): Promise<void> => {
  cookie.remove(CookieItemEnum.Auth);
};

const currentUser = (): UserModel | undefined => {
  return cookie.get<UserModel>(CookieItemEnum.Auth);
};

export const authService = { signIn, signOut, currentUser };
