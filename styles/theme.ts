import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      400: '#59abf3',
      500: '#007CC0',
      600: '#00508f',
    },
    text: {
      500: '#ffffff',
    },
    bg: {
      500: '#161C24',
    },
  },
  fonts: {
    heading: 'Be Vietnam',
    body: 'Be Vietnam',
  },
  styles: {
    global: {
      body: {
        bg: 'bg.500',
        color: 'text.500',
      },
    },
  },
});
