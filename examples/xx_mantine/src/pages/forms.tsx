import { Link } from 'waku';

import MyFormSimple from '../components/forms/MyFormSimple';

export default async function FormsPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.headline}</h1>
      <MyFormSimple />
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Forms',
    headline:'Mantine Forms'
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};