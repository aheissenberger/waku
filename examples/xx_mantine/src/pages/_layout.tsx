//import '../styles.css';
import '@mantine/core/styles.css';

import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import {theme} from '../theme';
import { Button } from '@mantine/core';
import ComboBox from '../components/MuiAutocomplete';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <MantineProvider  theme={theme}>
    <Button
        variant='contained'
      >
        DEMO
      </Button>
      <ComboBox />
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
