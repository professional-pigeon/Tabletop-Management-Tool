import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { noteShape } from '../../../lib/propShapes';

export default function Note({ note }) {
  console.log(note)
  return (
    <Box>
      <Text>Note</Text>
    </Box>
  );
};

Note.propTypes = {
  note: noteShape.isRequired
};