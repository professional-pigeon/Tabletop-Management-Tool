import { Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import { noteShape, placeShape } from '../../../lib/propShapes';
import Note from './Note';


export default function NoteList({ notes, place, setPlace }) {
  return (
    <Flex 
      direction='column'
      gap={2}
      maxHeight='100vh'
      overflowY='auto'
    >
      {notes.length > 0 && notes.map((note) => <Note key={`note ${note.id}`} note={note} place={place} setPlace={setPlace} />)}
    </Flex>
  );
};

NoteList.propTypes = {
  place: placeShape,
  setPlace: PropTypes.func,
  notes: PropTypes.arrayOf(noteShape)
};

NoteList.defaultProps = {
  place: {},
  setPlace: () => {},
  notes: []
};