import { Box as IBox } from '@/types/typings';
import { Box, Text } from '@mantine/core';
import GridBoxSmall from './GridBoxSmall';

interface Props {
  editMode?: boolean;
  content?: IBox[];
  onClick?: (content: IBox | string) => void;
}

const GridBoxSmallLayout: React.FC<Props> = ({ onClick, editMode, content }) => {
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
      {content ? (
        <>
          <GridBoxSmall onClick={onClick} content={content[0]} editMode />
          <GridBoxSmall onClick={onClick} content={content[1]} editMode />
        </>
      ) : (
        <>
          <GridBoxSmall onClick={onClick} />
          <GridBoxSmall onClick={onClick} />
        </>
      )}
    </Box>
  );
};

export default GridBoxSmallLayout;
