import React from 'react';

import { Flex, ListItem, OrderedList } from '@chakra-ui/layout';

function Home(): JSX.Element {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      w="100vw"
      h="100vh"
    >
      Esse é um template da HDN contendo:
      <OrderedList>
        <ListItem>React com Next + Typescript</ListItem>
        <ListItem>Context API</ListItem>
        <ListItem>ChakraUI</ListItem>
        <ListItem>Eslint + Prettier + Editor config</ListItem>
        <ListItem>Husky + Lint staged + Commitlint</ListItem>
      </OrderedList>
    </Flex>
  );
}

export default Home;
