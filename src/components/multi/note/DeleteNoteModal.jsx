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
import { campaignShape, locationShape, characterShape } from '../../../lib/propShapes';
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
      // const newCampaigns = campaigns.filter((obj) => obj.id !== campaignId)
      // setPlace(newCampaigns)
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
            <Button onClick={() => deleteCampaignWrap()} isDisabled={textConfirm !== 'DELETE'}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteNoteModal.propTypes = {
  noteId: PropTypes.number.isRequired,
  place: PropTypes.oneOfType([campaignShape, locationShape, characterShape, PropTypes.object]),
  setPlace: PropTypes.func,
  buttonVariant: PropTypes.string,
};