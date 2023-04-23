import { useAuth } from '@clerk/nextjs';
import { Box, Button, Sx } from '@mantine/core';
import { IconBackspace, IconLogout } from '@tabler/icons-react';
import { useRouter } from 'next/router';

const ButtonProps: Sx = {
  width: '100%',
  textTransform: 'uppercase',
};

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { signOut } = useAuth();

  console.log(router.asPath, router.basePath);

  return (
    <Box
      component='main'
      sx={(theme) => ({
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
      })}
    >
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[3],
          height: '100vh',
          width: '15rem',
          padding: '2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '2rem',
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          })}
        >
          <Button sx={ButtonProps} color='gray' component='a' href='/admin'>
            Frontpage
          </Button>
          <Button sx={ButtonProps} color='gray' component='a' href='/admin/drinks'>
            Drinks
          </Button>
          <Button sx={ButtonProps} color='gray' component='a' href='/admin/categories'>
            Categories
          </Button>
          <Button sx={ButtonProps} color='gray' component='a' href='/admin/users'>
            Users
          </Button>
        </Box>
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          })}
        >
          <Button sx={ButtonProps} leftIcon={<IconBackspace />} component='a' href='/'>
            Leave
          </Button>
          <Button sx={ButtonProps} leftIcon={<IconLogout />} onClick={() => signOut()}>
            Sign Out
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: '100vh',
          flex: 1,
          padding: '2rem',
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
