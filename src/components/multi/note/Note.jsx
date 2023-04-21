import { Flex, Text, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import { noteShape } from '../../../lib/propShapes';
import DeleteNoteModal from './DeleteNoteModal';

export default function Note({ note }) {
  return (
    <Flex 
      border='1px solid' 
      px='1rem' 
      py='1rem'
      borderRadius='md'
      boxShadow='md'
      gap={4}
      justifyContent='space-between'
      _hover={{
        bg: 'purple.100',
        boxShadow: 'lg'
      }}
    >
      <Text pl='1.5rem' textIndent='-1.5rem' fontWeight='bold'>
        {`${note.updatedAt}: `}
        <Text as='span' fontWeight='semibold'>
          {note.content}
        </Text>
      </Text>
      <HStack alignItems='flex-start'>
        <Button variant='update-card'>hi</Button>
        <DeleteNoteModal />
      </HStack>
    </Flex>
  );
};

Note.propTypes = {
  note: noteShape.isRequired
};