import React from 'react';

import { Flex } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="1400px"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      Header
    </Flex>
  );
}
