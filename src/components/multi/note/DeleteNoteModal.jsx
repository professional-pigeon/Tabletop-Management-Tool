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
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteNote } from '../../../lib/note';
import { placeShape } from '../../../lib/propShapes';
import StateTextInput from '../../single/StateTextInput';


export default function DeleteNoteModal({ 
  place,
  setPlace,
  noteId,
}) {
  const [textConfirm, setTextConfirm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetFields = () => {
    setTextConfirm('')
  };

  const onCloseWrap = () => {
    resetFields();
    onClose();
  };

  const deleteNoteCall = () => {
    deleteNote(noteId).then(() => {
      const newPlace = place
      const newNotes = place.notes.filter((obj) => obj.id !== noteId)
      newPlace.notes = newNotes
      setPlace(newPlace)
    })
  }

  return (
    <>
      <IconButton onClick={onOpen} icon={<DeleteIcon />} variant='delete-icon'/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Campaign</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StateTextInput 
              helperText='Type DELETE then click Delete to confirm' 
              inputValue={textConfirm} 
              setInputValue={setTextConfirm}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={() => deleteNoteCall()} isDisabled={textConfirm !== 'DELETE'}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteNoteModal.propTypes = {
  noteId: PropTypes.number.isRequired,
  place: placeShape.isRequired,
  setPlace: PropTypes.func.isRequired,
};