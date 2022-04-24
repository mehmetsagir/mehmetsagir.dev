import { useEffect, useState } from 'react';
import Title from 'src/components/Projects/Title';

import Card from './Card';

type GistsProps = {
  description: string;
  html_url: string;
}[];

const Gists = () => {
  const [gists, setGists] = useState<GistsProps>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/mehmetsagir/gists')
      .then((res) => res.json().then((data) => setGists(data)))
      .catch(() => {});
  }, []);

  if (!gists.length) return null;
  return (
    <>
      <Title title="Gists" />
      {gists.length > 0 &&
        gists.map((gist, index) => (
          <Card key={index} title={gist.description} path={gist.html_url} />
        ))}
    </>
  );
};

export default Gists;
