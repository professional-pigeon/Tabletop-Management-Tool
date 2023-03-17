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
    addSubLocation({ locationId, name, description })
      .then((res) => {
        const newLocation = location
        newLocation.subLocations.push(res)
        setLocation(newLocation)
    })
    onCloseWrap();
  }

  return (
    <>
      <Button onClick={onOpen}>Add Sub-Location</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Sub-Location for {location.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' inputValue={name} setInputValue={setName}/>
            <TextInput name='Description' inputValue={description} setInputValue={setDescription}/>
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