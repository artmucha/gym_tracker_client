import * as React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { AuthProvider } from '@/providers/AuthProvider';
import ThemeProvider from '@/styles/theme';
import createEmotionCache from '@/styles/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <AuthProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Gym tracker</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </AuthProvider>
  );
}