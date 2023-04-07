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
import { campaignShape, locationShape } from '../../../lib/propShapes';
import TextInput from '../../single/TextInput';

export default function UpdateLocationModal({ 
  place, 
  setPlace 
}) {
  const [name, setName] = useState(place.name);
  const [description, setDescription] = useState(place.description);
  const [locationType, setLocationType] = useState(place.locationType);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetFields = () => {
    setDescription('');
    setName('');
  };

  const onCloseWrap = () => {
    resetFields();
    onClose();
  };

  const updateLocation = () => {
    console.log('update')
    console.log(name, description, locationType)
    onCloseWrap();
  };

  return (
    <>
      <Button onClick={onOpen}>Update Location</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' inputValue={name} setInputValue={setName}/>
            <TextInput name='Description' inputValue={description} setInputValue={setDescription}/>
            <TextInput name='Location Type' inputValue={locationType} setInputValue={setLocationType}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={updateLocation}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

UpdateLocationModal.propTypes = {
  place: PropTypes.oneOfType([campaignShape, locationShape, PropTypes.object]),
  setPlace: PropTypes.func, 
};

UpdateLocationModal.defaultProps = {
  place: {},
  setPlace: () => {}, 
};