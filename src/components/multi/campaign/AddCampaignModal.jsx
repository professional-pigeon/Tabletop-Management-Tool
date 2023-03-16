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
import { createCampaign } from '@/lib/campaign'

export default function AddCampaignModal({ campaigns, setCampaigns }) {
  const [name, setName] = useState('')
  const [notes, setNotes] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const resetFields = () => {
    setNotes('')
    setName('')
  }

  const onCloseWrap = () => {
    resetFields();
    onClose();
  }

  const addNewCampaign = () => {
    createCampaign({ name, notes })
      .then((res) => {
        if (res.error) {
          throw new Error(res.error)
        } else {
          const newCampaigns =  [...campaigns, res] 
          setCampaigns(newCampaigns)
          onCloseWrap();
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Button onClick={onOpen}>Add Campaign</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Campaign</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' inputValue={name} setInputValue={setName}/>
            <TextInput name='Notes' inputValue={notes} setInputValue={setNotes}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={addNewCampaign}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}