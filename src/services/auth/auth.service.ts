import { AuthenticateModel, UserModel } from '~/data/models';
import { cookie, CookieItemEnum } from '~/infra/cache';
import { api } from '~/infra/http/api-client/api-client';

const currentUser = (): UserModel | undefined =>
  cookie.get<UserModel>(CookieItemEnum.Auth);

async function signIn(authenticate: AuthenticateModel): Promise<void> {
  await api.post<UserModel>('/login', authenticate).then(({ data }) => {
    cookie.set<UserModel>(CookieItemEnum.Auth, data);
    if (data.token) {
      cookie.set<string>(CookieItemEnum.Auth, data.token);
    }
  });
}

function signOut(): void {
  cookie.remove(CookieItemEnum.Auth);
  cookie.remove(CookieItemEnum.Token);
}

export const authService = { currentUser, signIn, signOut };
