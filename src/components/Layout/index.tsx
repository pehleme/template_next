import React from 'react';

import { Flex } from '@chakra-ui/react';

import { Footer } from './Footer';
import { Header } from './Header';

const Layout: React.FC = ({ children }) => {
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
