import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import theme from '@/theme';
import { MantineProvider } from '@mantine/core';
import { emotionCache } from '@/emotion-cache';

const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  theme.fontFamily = rubik.style.fontFamily;

  return (
    <ClerkProvider {...pageProps}>
      <div className={rubik.className}>
        <MantineProvider withNormalizeCSS theme={theme} emotionCache={emotionCache}>
          <Component {...pageProps} />
        </MantineProvider>
      </div>
    </ClerkProvider>
  );
}
