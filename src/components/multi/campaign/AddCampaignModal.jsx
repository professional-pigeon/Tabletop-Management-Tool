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
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../single/TextInput';
import { createCampaign } from '../../../lib/campaign';
import { campaignShape } from '../../../lib/propShapes';

export default function AddCampaignModal({ campaigns, setCampaigns }) {
  const [name, setName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetFields = () => {
    setName('');
  }

  const onCloseWrap = () => {
    resetFields();
    onClose();
  }

  const addNewCampaign = () => {
    createCampaign({ name })
      .then((res) => {
        if (res.error) {
          throw new Error(res.error)
        } else {
          const newCampaigns =  [...campaigns, res] 
          setCampaigns(newCampaigns)
          onCloseWrap();
        }
      })
      .catch((err) => console.log(err));
  };

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
  );
};

AddCampaignModal.propTypes = {
  campaigns: PropTypes.arrayOf(campaignShape),
  setCampaigns: PropTypes.func,
};

AddCampaignModal.defaultProps = {
  campaigns: [],
  setCampaigns: () => {},
};