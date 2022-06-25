import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box, BoxProps } from '@chakra-ui/react';
import GNB from '@/components/GNB';

interface Props {
  title: string;
  children: ReactNode;
}

const ServiceLayout = ({ title, children, ...props }: Props & BoxProps) => (
  <Box {...props}>
    <Head>
      <title>{title}</title>
    </Head>
    <GNB />
    {children}
  </Box>
);

export default ServiceLayout;
