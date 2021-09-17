import React from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from '~/components';
import GlobalProvider from '~/contexts';
import { environments } from '~/environments';
import { makeServer } from '~/infra/test/mirage/server';
import { theme } from '~/styles/theme';

if (environments.mock) {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
            <Toaster position="top-right" />
          </Layout>
        </GlobalProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
