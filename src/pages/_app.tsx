import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import theme from '@/theme';
import { MantineProvider } from '@mantine/core';
import { emotionCache } from '@/emotion-cache';
import { Layouts } from '@/components/Layouts/Layouts';
import { MyAppProps } from '@/types/typings';

const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }: MyAppProps) {
  theme.fontFamily = rubik.style.fontFamily;

  const Layout = Layouts[Component.Layout] ?? ((page) => page);

  return (
    <ClerkProvider {...pageProps}>
      <div className={rubik.className}>
        <MantineProvider withNormalizeCSS theme={theme} emotionCache={emotionCache}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </div>
    </ClerkProvider>
  );
}
