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
import { parseCampaignToSelects } from '@/lib/parsers'
import TextInput from '../../single/TextInput'
import { getCampaign } from '@/lib/campaign'
import { characterRaces as characterRaceOptions, characterTypes as characterTypeOptions } from '@/lib/enumerated'
import PlaceSelect from '@/components/single/PlaceSelect'
import CustomSelect from '@/components/single/CustomSelect'

export default function AddCharacterModal({
  campaignId, 
  initialLocation,
  setInitialLocation
}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [characterRace, setCharacterRace] = useState('')
  const [characterType, setCharacterType] = useState('')
  const [place, setPlace] = useState({})
  const [selectOptions, setSelectOptions] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (!campaignId) return;
    getCampaign(campaignId).then((res) => {
      const selects = parseCampaignToSelects(res)
      setSelectOptions(selects)
    })
  }, [campaignId])


  const resetFields = () => {
    setPlace({})
    setCharacterRace('')
    setCharacterType('')
    setDescription('')
    setName('')
  }

  const onCloseWrap = () => {
    resetFields();
    onClose();
  }

  const addNewCharacter = () => {
    const { id, placeType } = place
    addCharacter({ 
      placeType, 
      placeId: id, 
      characterType,
      characterRace, 
      name, 
      description })
      .then((res) => {
        let newLocation = initialLocation
        newLocation.characters.push(res)
        setInitialLocation(newLocation)
    })
    onCloseWrap();
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
            <CustomSelect 
                name='Character Type' 
                selectValue={characterType} 
                setSelectValue={setCharacterType} 
                selectOptions={characterTypeOptions} 
            />
            <CustomSelect 
              name='Character Race' 
              selectValue={characterRace} 
              setSelectValue={setCharacterRace} 
              selectOptions={characterRaceOptions} 
            />
            <PlaceSelect 
              name='Where is the Character?' 
              selectOptions={selectOptions} 
              selectValue={place} 
              setSelectValue={setPlace}
            />
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