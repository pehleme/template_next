import React from 'react';

import { Flex } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex height="100vh" width="100vw">
      {children}
    </Flex>
  );
};

export { Layout };
