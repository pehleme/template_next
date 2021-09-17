import React from 'react';

import { AuthProvider, useAuth } from './auth/AuthProvider';

const GlobalProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default GlobalProvider;
export { useAuth };
