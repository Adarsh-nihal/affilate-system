// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#121212',
        color: 'white',
      },
    },
  },
});

export default theme;
