import React from 'react';

import { Flex } from '@chakra-ui/react';

const Layout: React.FC = ({ children }) => {
  return (
    <Flex height="100vh" width="100vw">
      <Flex flex="1" maxW="1056px" w="100%" mt="28" pb="8" px="8">
        {children}
      </Flex>
    </Flex>
  );
};

export { Layout };
