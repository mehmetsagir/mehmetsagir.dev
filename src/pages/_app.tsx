import 'prismjs/themes/prism-okaidia.css';

import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Layout from 'src/components/Layout';

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/memoji.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: 14,
            },
          }}
        />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
