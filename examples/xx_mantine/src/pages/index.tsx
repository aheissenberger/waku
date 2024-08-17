import { Link } from 'waku';

import { Counter } from '../components/counter';
import { Button,Autocomplete} from '@mantine/core';
import ComboBox from '../components/Combox';
import MyDate from '../components/MyDate';
import MyAreaChart from '../components/charts/AreaChart/MyAreaChart';
export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
      <Button
        variant='contained'
      >
        DEMO BUTTTON 2
      </Button>
       <ComboBox />
     <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['LOCAL','React', 'Angular', 'Vue', 'Svelte']}
    /> 
    <MyDate /> 
    {/* <MyAreaChart /> */}
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
