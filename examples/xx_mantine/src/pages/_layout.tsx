//import '../styles.css';
import '@mantine/core/styles.css';

import type { ReactNode } from 'react';
import { Autocomplete, MantineProvider } from '@mantine/core';
import {theme} from '../theme';
import { Button } from '@mantine/core';
import ComboBox from '../components/Combox';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <MantineProvider  theme={theme}>
    {/* <Button
        variant='contained'
      >
        DEMO
      </Button>
      <ComboBox /> */}
      {/* <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    /> */}
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
