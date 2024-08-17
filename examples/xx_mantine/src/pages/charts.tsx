import { Link } from 'waku';

import MyAreaChart from '../components/charts/AreaChart/MyAreaChart';

export default async function FormsPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <MyAreaChart />
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Charts',
    headline: 'Mantine Charts',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
