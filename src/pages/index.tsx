import Head from 'next/head';
import { Box, Text, TextInput } from '@mantine/core';
import backgroundImage from '@/assets/andrew-welch-Y-RyEJ8eqHc-unsplash.jpg';
import GridLayout from '@/components/Grid/GridLayout';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const gridContent = {
  big: {
    image:
      'https://images.unsplash.com/photo-1624528199921-838223305357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    title: 'Sour Cocktails',
    subtitle: 'Browse all the "sour" cocktails',
  },
  small: [
    {
      image:
        'https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Summer Cocktails',
      subtitle: 'For the summer evenings',
    },
    {
      image:
        'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'The Classics',
      subtitle: 'The ones you should know',
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>BarMate</title>
        <meta name='description' content='The opinionated list of beverages and cocktails' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        component='main'
        sx={(theme) => ({
          minHeight: '100vh',
          width: '100%',
        })}
      >
        <Box
          sx={{
            height: '80vh',
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Text component='h1' size={72}>
            BarMate
          </Text>
          <Text size={18}>The opinionated list of beverages and cocktails</Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Container>
            <Box
              sx={{
                padding: '1rem 0 2rem 0',
              }}
            >
              <TextInput placeholder='Search all drinks' variant='filled' rightSection={<IconSearch color='gray' />} />
            </Box>
            <Box
              sx={(theme) => ({
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              })}
            >
              <GridLayout content={gridContent} />
              <GridLayout content={gridContent} reverse />
            </Box>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  );
}
