import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  IconButton
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { EditIcon } from '@chakra-ui/icons';
import TextInput from '../../single/TextInput';
import { noteShape, placeShape } from '../../../lib/propShapes';
import { updateNote } from '../../../lib/note';

export default function UpdateNoteModal({
  note,
  place,
  setPlace
}) {
  const { content, id } = note
  const contentRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateNoteCall = () => {
    const params = {
      id,
      content: contentRef.current.value || content
    }
    updateNote(params).then((res) => {
      const newPlace = { ...place }
      const newNotes = place.notes.filter((obj) => obj.id !== params.id)
      newNotes.unshift(res)
      newPlace.notes = newNotes
      setPlace(newPlace)
    })
    onClose()
  }

  return (
    <>
      <IconButton onClick={onOpen} icon={<EditIcon />} variant='update-icon'/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Note Content' valueRef={contentRef} placeholder={content} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={updateNoteCall}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

UpdateNoteModal.propTypes = {
  place: placeShape.isRequired,
  setPlace: PropTypes.func.isRequired,
  note: noteShape.isRequired,
};