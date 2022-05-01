import 'prismjs/themes/prism-okaidia.css';

import Head from 'next/head';
import Layout from 'src/components/Layout';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/memoji.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
