import toast from 'react-hot-toast';

import { AuthenticateModel, UserModel } from '~/data/models';
import { cookie, CookieItemEnum } from '~/infra/cache';
import { api } from '~/infra/http/api-client/api-client';

const currentUser = cookie.get<UserModel>(CookieItemEnum.Auth);
const isLoggedIn = !!currentUser;

async function signIn(authenticate: AuthenticateModel): Promise<void> {
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
}

async function signOut(): Promise<void> {
  cookie.remove(CookieItemEnum.Auth);
  cookie.remove(CookieItemEnum.Token);
}

export const authService = { isLoggedIn, currentUser, signIn, signOut };
