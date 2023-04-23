import { Box as IBox } from '@/types/typings';
import { Box, Text } from '@mantine/core';
import { IconCirclePlus, IconEditCircle } from '@tabler/icons-react';
import { useRouter } from 'next/router';

interface Props {
  editMode?: boolean;
  content?: IBox;
  onClick?: (content: IBox | string) => void;
}

const GridBoxLarge: React.FC<Props> = ({ onClick, editMode, content }) => {
  const router = useRouter();

  const handleClick = () => {
    if (content && !editMode) {
      router.push(`/item/${content.id}`);
    }

    if (editMode && onClick) {
      if (content) {
        onClick(content);
      } else {
        onClick('new');
      }
    }
  };

  return (
    <Box
      sx={(theme) => ({
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '0.25rem',
        backgroundColor: theme.colors.gray[3],
        backgroundImage: `url(${content?.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        '&:hover': {
          boxShadow: '0 0 10px rgba(0,0,0,0.7)',
        },
      })}
      onClick={handleClick}
    >
      {editMode && content ? (
        <>
          <Text size={32} fw='bold'>
            {content.title}
          </Text>
          <Text size='sm'>{content.subtitle}</Text>
        </>
      ) : null}

      {!editMode && content ? (
        <>
          <Text size={32} fw='bold'>
            {content.title}
          </Text>
          <Text size='sm'>{content.subtitle}</Text>
        </>
      ) : null}
      {!content ? (
        <>
          <IconCirclePlus color='orange' size={36} />
        </>
      ) : null}
    </Box>
  );
};

export default GridBoxLarge;
