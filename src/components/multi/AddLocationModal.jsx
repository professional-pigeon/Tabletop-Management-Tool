import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function AddLocationModal({ locations, setLocations }) {
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

  const addNewLocation = () => {
    console.log(name, description, 'no notes');
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
            <Text>Name</Text>
            <Input value={name} onChange={(e) => setName(e.target.value)}/>
            <Text>Description</Text>
            <Input value={description} onChange={(e) => setDescription(e.target.value)}/>
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