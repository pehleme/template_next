import React from 'react';

import { AuthProvider, useAuth } from './auth/context';

const GlobalProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalProvider;
export { useAuth };
