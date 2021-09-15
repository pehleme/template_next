import React from 'react';
import { Toaster } from 'react-hot-toast';
import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from '~/components';
import GlobalProvider from '~/contexts';
import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster position="top-right" />
        </Layout>
      </GlobalProvider>
    </ChakraProvider>
  );
}

export default MyApp;
