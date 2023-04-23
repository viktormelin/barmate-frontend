import { ActionIcon, Box, Text, Tooltip } from '@mantine/core';
import GridBoxLarge from './GridBoxLarge';
import GridBoxSmallLayout from './GridBoxSmallLayout';
import { Box as IBox, Grid } from '@/types/typings';
import { IconRotate, IconTrash } from '@tabler/icons-react';

interface Props {
  editMode?: boolean;
  reverse?: boolean;
  content?: Grid;
  onClick?: (content: IBox | string) => void;
}

const GridLayout: React.FC<Props> = ({ onClick, editMode, reverse, content }) => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: 'calc((1024px / 3) * 2)',
        display: 'flex',
        gap: '1rem',
      })}
    >
      {editMode ? (
        <Box
          sx={(theme) => ({
            height: 'fit-content',
            backgroundColor: theme.colors.gray[3],
            borderRadius: '0.25rem',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          })}
        >
          <Tooltip label='Reverse row'>
            <ActionIcon color='orange'>
              <IconRotate />
            </ActionIcon>
          </Tooltip>
          <Tooltip label='Remove row'>
            <ActionIcon color='orange'>
              <IconTrash />
            </ActionIcon>
          </Tooltip>
        </Box>
      ) : null}
      {reverse ? (
        <>
          <GridBoxSmallLayout content={content?.small} onClick={onClick} />
          <GridBoxLarge content={content?.big} editMode onClick={onClick} />
        </>
      ) : (
        <>
          <GridBoxLarge content={content?.big} editMode onClick={onClick} />
          <GridBoxSmallLayout content={content?.small} onClick={onClick} />
        </>
      )}
    </Box>
  );
};

export default GridLayout;
