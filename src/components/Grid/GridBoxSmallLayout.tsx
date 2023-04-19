import { Box as IBox } from '@/types/typings';
import { Box, Text } from '@mantine/core';
import GridBoxSmall from './GridBoxSmall';

interface Props {
  content: IBox[];
}

const GridBoxSmallLayout: React.FC<Props> = ({ content }) => {
  return (
    <Box
      sx={(theme) => ({
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      })}
    >
      <GridBoxSmall content={content[0]} />
      <GridBoxSmall content={content[1]} />
    </Box>
  );
};

export default GridBoxSmallLayout;
