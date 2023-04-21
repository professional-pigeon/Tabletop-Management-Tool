import { Flex, Text, HStack, Button } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import { noteShape, placeShape } from '../../../lib/propShapes';
import DeleteNoteModal from './DeleteNoteModal';

export default function Note({ note, place, setPlace }) {
  const { updatedAt, content, id } = note
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
        {`${updatedAt}: `}
        <Text as='span' fontWeight='semibold'>
          {content}
        </Text>
      </Text>
      <HStack alignItems='flex-start'>
        <Button variant='update-card'>hi</Button>
        <DeleteNoteModal noteId={id} place={place} setPlace={setPlace} />
      </HStack>
    </Flex>
  );
};

Note.propTypes = {
  place: placeShape.isRequired,
  setPlace: PropTypes.func.isRequired,
  note: noteShape.isRequired
};