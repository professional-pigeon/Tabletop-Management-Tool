import { Flex, Text, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { noteShape } from '../../../lib/propShapes';

export default function Note({ note }) {
  return (
    <Flex 
      border='1px solid' 
      minW='24px' 
      px='1rem' 
      py='1rem'
      borderRadius='md'
      boxShadow='md'
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
      <VStack>
        <Button variant='delete-card'>hi</Button>
        <Button variant='update-card'>hi</Button>
      </VStack>
    </Flex>
  );
};

Note.propTypes = {
  note: noteShape.isRequired
};