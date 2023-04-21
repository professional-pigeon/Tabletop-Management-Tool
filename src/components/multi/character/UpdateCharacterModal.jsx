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
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../single/TextInput';
import { campaignShape, characterShape, locationShape } from '../../../lib/propShapes';
import { 
  characterRaces as characterRaceOptions, 
  characterTypes as characterTypeOptions } 
  from '../../../lib/enumerated';
import { updateCharacter } from '../../../lib/character';
import PlaceSelect from '../../single/PlaceSelect';
import CustomSelect from '../../single/CustomSelect';
import usePlaceSelects from '../../../lib/hooks/usePlaceSelects';

export default function UpdateCharacterModal({
  character,
  setCharacter,
  initialPlace,
  buttonVariant
}) {
  const { name, description, characterRace, characterType } = character
  const nameRef = useRef();
  const descriptionRef = useRef();
  const characterRaceRef = useRef();
  const characterTypeRef = useRef();

  const [place, setPlace] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = initialPlace;
  const { selectOptions } = usePlaceSelects();

  const sortSelects = (selects) => {
    // eslint-disable-next-line no-nested-ternary
    const sorted = selects.sort((a, b) => a.id === id ? -1 : b.id === id ? 1 : 0)
    return sorted
  }

  const sortedSelectOptions = sortSelects(selectOptions);

  const updateCharacterCall = () => {
    const { id: placeId, placeType } = place;
    const params = {
      placeId: placeId || initialPlace.id,
      placeType: placeType || sortedSelectOptions[0].placeType,
      characterId: character.id,
      name: nameRef.current.value || name,
      description: descriptionRef.current.value || description,
      characterType: characterTypeRef.current.value || characterType,
      characterRace: characterRaceRef.current.value || characterRace
    }
    updateCharacter(params).then((res) => setCharacter(res))
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} variant={buttonVariant}>Update Character</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Character</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TextInput name='Name' valueRef={nameRef} placeholder={name} />
            <TextInput name='Description' valueRef={descriptionRef} placeholder={description} />
            <CustomSelect 
              name='Character Type' 
              valueRef={characterTypeRef}
              selectOptions={characterTypeOptions} 
              placeholder={characterType}
            />
            <CustomSelect 
              name='Character Race' 
              valueRef={characterRaceRef}
              selectOptions={characterRaceOptions} 
              placeholder={characterRace}
            />
            <PlaceSelect 
              name='Where is the Character?' 
              placeholder={initialPlace.name}
              selectOptions={sortedSelectOptions} 
              selectValue={place} 
              setSelectValue={setPlace}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={updateCharacterCall}>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

UpdateCharacterModal.propTypes = {
  initialPlace: PropTypes.oneOfType([campaignShape, locationShape, PropTypes.object]),
  buttonVariant: PropTypes.string,
  character: characterShape,
  setCharacter: PropTypes.func,
};

UpdateCharacterModal.defaultProps = {
  initialPlace: {},
  buttonVariant: undefined,
  character: {},
  setCharacter: () => {},
};