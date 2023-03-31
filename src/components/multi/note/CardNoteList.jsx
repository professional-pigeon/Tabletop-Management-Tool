import { Box, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import { noteShape } from '../../../lib/propShapes';

export default function CardNoteList({ notes }) {
  return (
    <Box>
      <Text>Notes</Text>
      <UnorderedList>
        {notes.length === 0 && <Text>no notes</Text>}
        {notes.length > 0 && <Text noOfLines={2}>{`${notes[0].updatedAt}: ${notes[0].content}`}</Text>}
        {notes.length > 1 && <Text>+ {notes.length -1} more</Text>}
      </UnorderedList>
    </Box>
  );
};

CardNoteList.propTypes = {
  notes: PropTypes.arrayOf(noteShape)
};

CardNoteList.defaultProps = {
  notes: []
};