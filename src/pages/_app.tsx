import React from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import GlobalProvider from '~/contexts';
import { environments } from '~/environments';
import { theme } from '~/styles/theme';
import { makeServer } from '~/test/mirage/server';

if (environments.mock) {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <GlobalProvider>
          <Component {...pageProps} />
          <Toaster />
        </GlobalProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
