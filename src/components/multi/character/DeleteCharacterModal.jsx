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
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteCharacter } from '../../../lib/character';
import { placeShape } from '../../../lib/propShapes';
import StateTextInput from '../../single/StateTextInput';

export default function DeleteCharacterModal({ 
  characterId,
  setPlace,
  place,
  buttonVariant
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

  const deleteCharacterWrap = () => {
    deleteCharacter(characterId).then(() => {
      const newPlace = { ...place }
      const newCharacters = place.characters.filter((obj) => obj.id !== characterId)
      newPlace.characters = newCharacters
      setPlace(newPlace)
    })
  }

  return (
    <>
      <Button onClick={onOpen} variant={buttonVariant}>Delete</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Character</ModalHeader>
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
            <Button onClick={() => deleteCharacterWrap()} isDisabled={textConfirm !== 'DELETE'}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteCharacterModal.propTypes = {
  characterId: PropTypes.number,
  place: placeShape,
  setPlace: PropTypes.func, 
  buttonVariant: PropTypes.string,
};

DeleteCharacterModal.defaultProps = {
  characterId: 0,
  place: {},
  setPlace: () => {}, 
  buttonVariant: undefined,
};