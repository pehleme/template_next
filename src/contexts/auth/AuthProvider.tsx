import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useRouter } from 'next/dist/client/router';

import { AxiosError } from 'axios';

import { AuthenticateModel, UserModel } from '~/data/models';
import { authService } from '~/services';

import { PropsAuthContext } from './types';

const AuthContext = createContext<PropsAuthContext>({} as PropsAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserModel | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { replace } = useRouter();

  const { currentUser, signIn, signOut } = authService;

  useEffect(() => {
    setUser(currentUser);
    setIsLoggedIn(!!user);
  }, []);

  async function login(authenticate: AuthenticateModel) {
    await signIn(authenticate)
      .then(() => {
        setUser(currentUser);
        setIsLoggedIn(true);
        replace('/');
        toast.success('Login realizado com sucesso');
      })
      .catch(({ response }: AxiosError) => {
        toast.error(response?.data?.error);
      });
  }

  function logout() {
    signOut();
    setUser(undefined);
    setIsLoggedIn(false);
    replace('/logout');
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): PropsAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
