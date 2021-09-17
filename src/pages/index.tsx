import React from 'react';

import { Flex, ListItem, OrderedList } from '@chakra-ui/layout';

import { Layout } from '~/components';
import { useAuth } from '~/contexts';
import { useTasks } from '~/hooks';

function Home(): JSX.Element {
  const { data, isLoading, error } = useTasks();
  const { user } = useAuth();

  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="100%"
        h="100%"
      >
        Esse é um template da HDN contendo:
        {user?.name ?? '-'}
        <OrderedList>
          <ListItem>React com Next + Typescript</ListItem>
          <ListItem>Context API</ListItem>
          <ListItem>ChakraUI</ListItem>
          <ListItem>Eslint + Prettier + Editor config</ListItem>
          <ListItem>Husky + Lint staged + Commitlint</ListItem>
        </OrderedList>
      </Flex>
    </Layout>
  );
}

export default Home;
