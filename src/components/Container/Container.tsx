import { Box } from '@mantine/core';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        height: '100%',
        width: '1024px',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      })}
    >
      {children}
    </Box>
  );
};

export default Container;
