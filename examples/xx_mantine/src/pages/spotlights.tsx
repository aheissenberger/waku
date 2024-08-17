import { Link } from 'waku';

import MySpotlight from '../components/MySpotlight';

export default async function SpotlightsPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <MySpotlight />
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Ext / Spotlights',
    headline:'Extentions / Spotlights',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
