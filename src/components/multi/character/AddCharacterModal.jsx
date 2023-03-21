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
import { useState, useEffect } from 'react'
import { addCharacter } from '@/lib/character'
import { getAllLocations } from '@/lib/location'
import TextInput from '../../single/TextInput'

export default function AddCharacterModal({
  campaignId, 
  place,
  setPlace
}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [characterRace, setCharacterRace] = useState('')
  const [characterType, setCharacterType] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!campaignId) return;
    console.log('campaignId', campaignId)
    getAllLocations({ campaignId }).then((res) => console.log('res', res))
  })

  const resetFields = () => {
    setDescription('')
    setName('')
  }

  const onCloseWrap = () => {
    resetFields();
    onClose();
  }

  const addNewCharacter = () => {
    console.log('clicked')
    // addLocation({ campaignId, locationType, name, description })
    //   .then((res) => {
    //     const newCampaign = campaign
    //     newCampaign.locations.push(res)
    //     setCampaign(newCampaign)
    // })
    // onCloseWrap();
  }

  return (
    <>
      <Button onClick={onOpen}>Add Character</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Character</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' inputValue={name} setInputValue={setName}/>
            <TextInput name='Description' inputValue={description} setInputValue={setDescription}/>
            <TextInput name='Character Type' inputValue={characterType} setInputValue={setCharacterType}/>
            <TextInput name='Character Race' inputValue={characterRace} setInputValue={setCharacterRace}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={addNewCharacter}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}