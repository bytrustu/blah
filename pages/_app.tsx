import React from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import 'styles/globals.css';
import { AuthUserProvider } from '@/context/authUser.context';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  </ChakraProvider>
);

export default App;
