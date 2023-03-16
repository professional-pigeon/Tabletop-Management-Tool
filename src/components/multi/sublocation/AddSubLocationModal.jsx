import { addSubLocation } from '@/lib/sublocation'
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
import { useState } from 'react'
import TextInput from '../../single/TextInput'

export default function AddSubLocationModal({ locationId, location, setLocation }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [subLocationType, setLocationType] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const resetFields = () => {
    setDescription('')
    setName('')
  }

  const onCloseWrap = () => {
    resetFields();
    onClose();
  }

  const addNewSubLocation = () => {
    addSubLocation({ locationId, subLocationType, name, description })
      .then((res) => {
        const newLocation = location
        newLocation.sub_locations.push(res)
        setLocation(newLocation)
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
            <TextInput name='Sub-Location Type' inputValue={subLocationType} setInputValue={setLocationType}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={addNewSubLocation}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}