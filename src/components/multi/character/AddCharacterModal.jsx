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
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addCharacter } from '../../../lib/character';
import { parseCampaignToSelects } from '../../../lib/parsers';
import TextInput from '../../single/TextInput';
import { campaignShape, locationShape } from '../../../lib/propShapes';
import { 
  characterRaces as characterRaceOptions, 
  characterTypes as characterTypeOptions } 
  from '../../../lib/enumerated';
import PlaceSelect from '../../single/PlaceSelect';
import CustomSelect from '../../single/CustomSelect';
import { getAllLocations } from '../../../lib/location';
import { useCampaignIdContext } from '../../context/CampaignIdContext';
import usePlaceSelects from '@/lib/hooks/usePlaceSelects';

export default function AddCharacterModal({
  initialLocation,
  setInitialLocation
}) {
  const nameRef = useRef()
  const descriptionRef = useRef()
  const characterRaceRef = useRef()
  const characterTypeRef = useRef()

  const [place, setPlace] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = initialLocation
  const { selectOptions } = usePlaceSelects()

  const sortSelects = (selects) => {
    // eslint-disable-next-line no-nested-ternary
    const sorted = selects.sort((a, b) => a.id === id ? -1 : b.id === id ? 1 : 0)
    return sorted
  }

  const sortedSelectOptions = sortSelects(selectOptions)

  const onCloseWrap = () => {
    setPlace({})
    onClose();
  };

  const addNewCharacter = () => {
    const { id: placeId, placeType } = place;
    addCharacter({ 
      placeType, 
      placeId, 
      characterType: characterTypeRef.current.value,
      characterRace: characterRaceRef.current.value, 
      name: nameRef.current.value, 
      description: descriptionRef.current.value 
    })
      .then((res) => {
        const newLocation = { ...initialLocation }
        newLocation.characters.push(res)
        setInitialLocation(newLocation)
    });
    onCloseWrap();
  };

  return (
    <>
      <Button onClick={onOpen}>Add Character</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Character</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' valueRef={nameRef} />
            <TextInput name='Description' valueRef={descriptionRef} />
            <CustomSelect 
                name='Character Type' 
                valueRef={characterTypeRef}
                selectOptions={characterTypeOptions} 
            />
            <CustomSelect 
              name='Character Race' 
              valueRef={characterRaceRef}
              selectOptions={characterRaceOptions} 
            />
            <PlaceSelect 
              name='Where is the Character?' 
              selectOptions={sortedSelectOptions} 
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
  );
};

AddCharacterModal.propTypes = {
  initialLocation: PropTypes.oneOfType([campaignShape, locationShape, PropTypes.object]),
  setInitialLocation: PropTypes.func, 
};

AddCharacterModal.defaultProps = {
  initialLocation: {},
  setInitialLocation: () => {},
};