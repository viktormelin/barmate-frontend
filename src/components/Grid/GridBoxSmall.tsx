import { Box as IBox } from '@/types/typings';
import { Box, Text } from '@mantine/core';

interface Props {
  content: IBox;
}

const GridBoxSmall: React.FC<Props> = ({ content }) => {
  return (
    <Box
      sx={(theme) => ({
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '50%',
        borderRadius: '0.25rem',
        backgroundImage: `url(${content.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        '&:hover': {
          boxShadow: '0 0 10px rgba(0,0,0,0.7)',
        },
      })}
    >
      <Text size={32} fw='bold'>
        {content.title}
      </Text>
      <Text size='sm'>{content.subtitle}</Text>
    </Box>
  );
};

export default GridBoxSmall;
