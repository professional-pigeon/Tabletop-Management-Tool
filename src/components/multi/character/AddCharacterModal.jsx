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
import { addCharacter } from '../../../lib/character';
import TextInput from '../../single/TextInput';
import { campaignShape, locationShape } from '../../../lib/propShapes';
import { 
  characterRaces as characterRaceOptions, 
  characterTypes as characterTypeOptions } 
  from '../../../lib/enumerated';
import PlaceSelect from '../../single/PlaceSelect';
import CustomSelect from '../../single/CustomSelect';
import usePlaceSelects from '../../../lib/hooks/usePlaceSelects';

export default function AddCharacterModal({
  initialPlace,
  setInitialPlace
}) {
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
        const newLocation = { ...initialPlace }
        newLocation.characters.push(res)
        setInitialPlace(newLocation)
    });
    setPlace();
    onClose();
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
            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
  initialPlace: PropTypes.oneOfType([campaignShape, locationShape, PropTypes.object]),
  setInitialPlace: PropTypes.func, 
};

AddCharacterModal.defaultProps = {
  initialPlace: {},
  setInitialPlace: () => {},
};