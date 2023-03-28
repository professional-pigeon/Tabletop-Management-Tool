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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { addLocation } from '../../../lib/location'
import TextInput from '../../single/TextInput'

export default function AddLocationModal({ 
  isAddingInnerLocation, 
  campaignId, 
  place, 
  setPlace 
}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [locationType, setLocationType] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const resetFields = () => {
    setDescription('')
    setName('')
  }

  const onCloseWrap = () => {
    resetFields();
    onClose();
  }

  const addNewLocation = () => {
    const upperLocationId = isAddingInnerLocation ? place.id : null
    addLocation({ campaignId, locationType, name, description, upperLocationId })
      .then((res) => {
        const newPlace = place
        if (isAddingInnerLocation) {
          newPlace.innerLocations.push(res)
        } else {
          newPlace.locations.push(res)
        }
        setPlace(newPlace)
    })
    onCloseWrap();
  }

  return (
    <>
      <Button onClick={onOpen}>Add Location</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Location</ModalHeader>
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
            <Button onClick={addNewLocation}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}