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
import { addLocation } from '../../../lib/location';
import { campaignShape, locationShape } from '../../../lib/propShapes';
import TextInput from '../../single/TextInput';
import { useCampaignIdContext } from '../../context/CampaignIdContext';

export default function AddLocationModal({ 
  isAddingInnerLocation, 
  place, 
  setPlace,
  buttonVariant
}) {
  const nameRef = useRef()
  const descriptionRef = useRef()
  const locationTypeRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const campaignId = useCampaignIdContext()

  const addNewLocation = () => {
    const params = {
      campaignId,
      locationType: locationTypeRef.current.value,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      upperLocationId: isAddingInnerLocation ? place.id : null,
    }
    addLocation(params)
      .then((res) => {
        const newPlace = { ...place }
        if (isAddingInnerLocation) {
          newPlace.innerLocations.push(res)
        } else {
          newPlace.locations.push(res)
        }
        setPlace(newPlace)
    });
    onClose()
  };

  return (
    <>
      <Button onClick={onOpen} variant={buttonVariant}>{isAddingInnerLocation ? 'Add Inner Location' : 'Add Location'}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' valueRef={nameRef} />
            <TextInput name='Description' valueRef={descriptionRef} />
            <TextInput name='Location Type' valueRef={locationTypeRef} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={addNewLocation}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

AddLocationModal.propTypes = {
  place: PropTypes.oneOfType([campaignShape, locationShape, PropTypes.object]),
  isAddingInnerLocation: PropTypes.bool,
  setPlace: PropTypes.func, 
  buttonVariant: PropTypes.string,
};

AddLocationModal.defaultProps = {
  isAddingInnerLocation: false,
  place: {},
  setPlace: () => {}, 
  buttonVariant: undefined,
};