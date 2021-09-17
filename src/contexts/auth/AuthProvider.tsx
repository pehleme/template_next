import React, { createContext, useContext, useEffect, useState } from 'react';

import { AuthenticateModel, UserModel } from '~/data/models';
import { authService } from '~/services';

import { PropsAuthContext } from './types';

const AuthContext = createContext<PropsAuthContext>({} as PropsAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserModel | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { currentUser, signIn, signOut } = authService;

  useEffect(() => {
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  function login(authenticate: AuthenticateModel) {
    setIsLoading(true);

    signIn(authenticate)
      .then(() => setUser(currentUser))
      .finally(() => setTimeout(() => setIsLoading(false), 1500));
  }

  function logout() {
    setIsLoading(true);

    signOut()
      .then(() => setUser(undefined))
      .finally(() => setTimeout(() => setIsLoading(false), 1500));
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
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
