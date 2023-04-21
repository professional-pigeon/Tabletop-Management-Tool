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
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { campaignShape, locationShape, characterShape } from '../../../lib/propShapes';
import TextInput from '../../single/TextInput';
import { addNote } from '../../../lib/note';

export default function AddNoteModal({ 
  place, 
  setPlace,
  placeType,
  buttonVariant
}) {
  const contentRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addNoteCall = () => {
    const params = {
      content: contentRef.current.value,
      notePlaceType: placeType,
      notePlaceId: place.id
    }
    addNote(params).then((res) => {
      const newPlace = { ...place }
      newPlace.notes.unshift(res)
      setPlace(newPlace)
    })
    onClose()
  };

  return (
    <>
      <Button onClick={onOpen} variant={buttonVariant}>Add Note</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Note Content' valueRef={contentRef} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={addNoteCall}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

AddNoteModal.propTypes = {
  place: PropTypes.oneOfType([campaignShape, locationShape, characterShape, PropTypes.object]),
  setPlace: PropTypes.func, 
  placeType: PropTypes.string,
  buttonVariant: PropTypes.string,
};

AddNoteModal.defaultProps = {
  place: {},
  placeType: '',
  setPlace: () => {}, 
  buttonVariant: undefined,
};