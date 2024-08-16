import { Autocomplete } from '@mantine/core';
//import top100Films from './top100Films.js';

export default function ComboBox() {
  return (
    <>
      <Autocomplete
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}