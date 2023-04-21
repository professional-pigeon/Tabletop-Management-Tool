import { Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import { noteShape } from '../../../lib/propShapes';
import Note from './Note';


export default function NoteList({ notes }) {
  return (
    <Flex 
      px='1rem' 
      py='1rem'
      direction='column'
      gap={2}
      maxHeight='100vh'
      overflowY='auto'
    >
      {notes.length > 0 && notes.map((note) => <Note key={`note ${note.id}`}note={note}/>)}
    </Flex>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(noteShape)
};

NoteList.defaultProps ={
  notes: []
};