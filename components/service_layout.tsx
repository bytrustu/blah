import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  children: ReactNode;
}

const ServiceLayout = ({ title, children }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);

export default ServiceLayout;
