import React, { createContext, useContext, useEffect, useState } from 'react';

import { AuthenticateModel, UserModel } from '~/data/models';
import { authService } from '~/services';

import { DEFAULT_VALUE, PropsAuthContext } from './types';

const AuthContext = createContext<PropsAuthContext>(DEFAULT_VALUE);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserModel | undefined>(DEFAULT_VALUE.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { currentUser, signIn, signOut } = authService;

  useEffect(() => {
    setUser(currentUser());
    setIsLoading(false);
  }, []);

  const login = (authenticate: AuthenticateModel) => {
    setIsLoading(true);

    signIn(authenticate)
      .then(() => setUser(currentUser()))
      .finally(() => setTimeout(() => setIsLoading(false), 1500));
  };

  const logout = () => {
    setIsLoading(true);

    signOut()
      .then(() => setUser(undefined))
      .finally(() => setTimeout(() => setIsLoading(false), 1500));
  };

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
