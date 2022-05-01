import Head from 'next/head';

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Mehmet Sağır`}</title>
    </Head>
  );
};

export default Title;
