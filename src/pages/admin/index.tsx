import Container from '@/components/Container';
import Footer from '@/components/Footer';
import { Box, Text, TextInput } from '@mantine/core';
import { useState } from 'react';

const AdminPage = () => {
  const [menu, setMenu] = useState('Dashboard');

  return (
    <Box
      component='main'
      sx={(theme) => ({
        minHeight: '100vh',
        width: '100%',
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#000',
        }}
      >
        <Container>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            <Text
              sx={{
                cursor: 'pointer',
                fontSize: '1.2rem',
                textDecoration: menu === 'Dashboard' ? 'underline' : '',
                '&:hover': { textDecoration: 'underline' },
              }}
              onClick={() => setMenu('Dashboard')}
            >
              Dashboard
            </Text>
            <Text
              sx={{
                cursor: 'pointer',
                fontSize: '1.2rem',
                textDecoration: menu === 'Drinks' ? 'underline' : '',
                '&:hover': { textDecoration: 'underline' },
              }}
              onClick={() => setMenu('Drinks')}
            >
              Drinks
            </Text>
            <Text
              sx={{
                cursor: 'pointer',
                fontSize: '1.2rem',
                textDecoration: menu === 'Users' ? 'underline' : '',
                '&:hover': { textDecoration: 'underline' },
              }}
              onClick={() => setMenu('Users')}
            >
              Users
            </Text>
          </Box>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default AdminPage;
