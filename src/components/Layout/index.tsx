import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { Flex } from '@chakra-ui/react';

import { useAuth } from '~/contexts';

import { Footer } from './Footer';
import { Header } from './Header';

const Layout: React.FC = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { replace } = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      replace('/login');
    }
  });

  return (
    <Flex direction="column" h="100vh">
      <Header></Header>
      <Flex h="100%" w="100%">
        {children}
      </Flex>
      <Footer></Footer>
    </Flex>
  );
};

export { Layout };
