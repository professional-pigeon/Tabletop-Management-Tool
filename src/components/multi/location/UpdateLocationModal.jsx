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
import { updateLocation } from '../../../lib/location';

export default function UpdateLocationModal({ 
  place, 
  setPlace 
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [locationType, setLocationType] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetFields = () => {
    setDescription('');
    setName('');
    setLocationType('');
  };

  const onCloseWrap = () => {
    resetFields();
    onClose();
  };
  
  const updateLocationCall = () => {
    const params = {
      locationId: place.id,
      name: name || place.name,
      description: description || place.description,
      locationType: locationType || place.locationType,
      upperLocationId: place.upperLocationId
    }
    updateLocation(params).then((res) => {
      console.log(res)
      setPlace(res)
    })
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
            <TextInput name='Name' placeholder={place.name} inputValue={name} setInputValue={setName}/>
            <TextInput name='Description' placeholder={place.description} inputValue={description} setInputValue={setDescription}/>
            <TextInput name='Location Type' placeholder={place.locationType} inputValue={locationType} setInputValue={setLocationType}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={updateLocationCall}>Update</Button>
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