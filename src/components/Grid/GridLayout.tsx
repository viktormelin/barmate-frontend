import { Box, Text } from '@mantine/core';
import GridBoxLarge from './GridBoxLarge';
import GridBoxSmallLayout from './GridBoxSmallLayout';
import { Grid } from '@/types/typings';

interface Props {
  reverse?: boolean;
  content: Grid;
}

const GridLayout: React.FC<Props> = ({ reverse, content }) => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: 'calc((1024px / 3) * 2)',
        display: 'flex',
        gap: '1rem',
      })}
    >
      {reverse ? (
        <>
          <GridBoxSmallLayout content={content.small} />
          <GridBoxLarge content={content.big} />
        </>
      ) : (
        <>
          <GridBoxLarge content={content.big} />
          <GridBoxSmallLayout content={content.small} />
        </>
      )}
    </Box>
  );
};

export default GridLayout;
