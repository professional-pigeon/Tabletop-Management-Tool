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
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteLocation } from '../../../lib/location';
import { campaignShape, locationShape } from '../../../lib/propShapes';
import TextInput from '../../single/TextInput';


export default function DeleteLocationModal({ 
  locationId,
  setPlace,
  place
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

  const deleteLocationWrap = () => {
    deleteLocation(locationId).then(() => {
      const newPlace = place
      const newLocations = place.locations.filter((obj) => obj.id !== locationId)
      newPlace.locations = newLocations
      setPlace(newPlace)
    })
  }

  return (
    <>
      <Button onClick={onOpen}>Delete</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This will also delete all inner locations and attached characters</Text>
            <TextInput 
              helperText='Type DELETE then click Delete to confirm' 
              inputValue={textConfirm} 
              setInputValue={setTextConfirm}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={() => deleteLocationWrap()} isDisabled={textConfirm !== 'DELETE'}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteLocationModal.propTypes = {
  locationId: PropTypes.string,
  place: PropTypes.oneOfType([campaignShape, locationShape]),
  setPlace: PropTypes.func, 
};

DeleteLocationModal.defaultProps = {
  locationId: '',
  place: {},
  setPlace: () => {}, 
};