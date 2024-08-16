//import '../styles.css';
import '@mantine/core/styles.css';

import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import {theme} from '../theme';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <MantineProvider  theme={theme} withNormalizeCSS>
    {children}
    </MantineProvider>
    
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
