import { Box, Text, TextInput } from '@mantine/core';
import Link from 'next/link';

interface Props {
  absolute?: boolean;
}

const Footer: React.FC<Props> = ({ absolute }) => {
  return (
    <Box
      component='footer'
      sx={(theme) => ({
        position: absolute ? 'absolute' : 'relative',
        bottom: 0,
        marginTop: '2rem',
        padding: '2rem 0',
        maxWidth: '1024px',
        width: '100%',
        borderTop: `1px solid ${theme.colors.gray[5]}`,
        color: theme.colors.gray[9],
      })}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
        })}
      >
        <Box
          sx={(theme) => ({
            flex: 1,
          })}
        >
          <Text size={24} fw='bold'>
            BarMate
          </Text>
          <Text size={14}>The opinionated list of beverages and cocktails</Text>
        </Box>
        <Box
          sx={(theme) => ({
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            })}
          >
            <Text fw='bold'>Navigate</Text>
            <Link href='/'>Home</Link>
            <Link href='/cocktails'>Cocktails</Link>
            <Link href='/beverages'>Beverages</Link>
          </Box>
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            })}
          >
            <Text fw='bold'>About</Text>
            <Link href='/contact'>Contact</Link>
            <Link href='/admin'>Administration</Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '2rem',
        }}
      >
        <Text color='dimmed' align='right'>
          A website created by{' '}
          <Text component='a' href='https://dixxel.io'>
            dixxel.io
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
