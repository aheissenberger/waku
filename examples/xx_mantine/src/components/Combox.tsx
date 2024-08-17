'use client';
import { Autocomplete } from '@mantine/core';
//import top100Films from './top100Films.js';
import { useState } from 'react';

export default function ComboBox() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Autocomplete
        value={value}
        onChange={setValue}
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}