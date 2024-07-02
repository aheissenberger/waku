'use client';

import * as React from 'react';
import { Autocomplete, MantineProvider } from '@mantine/core';
import {theme} from '../theme';
//import top100Films from './top100Films.js';

export default function ComboBox() {
  return (
    <>
    <MantineProvider  theme={theme}>{/* placing the MantineProvider here will cause the ComboBox to not throw "MantineProvider not found" */}
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
    </MantineProvider>
    </>
  );
}