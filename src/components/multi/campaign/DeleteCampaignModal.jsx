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
import { deleteCampaign } from '../../../lib/campaign';
import { campaignShape } from '../../../lib/propShapes';
import StateTextInput from '../../single/StateTextInput';


export default function DeleteCampaignModal({ 
  campaignId,
  setCampaigns,
  campaigns,
  buttonVariant
}) {
  const [textConfirm, setTextConfirm] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetFields = () => {
    setTextConfirm('')
  };

  const onCloseWrap = () => {
    resetFields();
    onClose();
  };

  const deleteCampaignWrap = () => {
    deleteCampaign(campaignId).then(() => {
      const newCampaigns = campaigns.filter((obj) => obj.id !== campaignId)
      setCampaigns(newCampaigns)
    })
  }

  const open = (e) => {
    e.preventDefault()
    onOpen()
  }

  return (
    <>
      <Button onClick={(e) => open(e)} variant={buttonVariant}>Delete</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Campaign</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StateTextInput 
              helperText='Type DELETE then click Delete to confirm' 
              inputValue={textConfirm} 
              setInputValue={setTextConfirm}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onCloseWrap}>
              Close
            </Button>
            <Button onClick={() => deleteCampaignWrap()} isDisabled={textConfirm !== 'DELETE'}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

DeleteCampaignModal.propTypes = {
  campaignId: PropTypes.number.isRequired,
  campaigns: PropTypes.arrayOf(campaignShape).isRequired,
  setCampaigns: PropTypes.func.isRequired,
  buttonVariant: PropTypes.string,
};

DeleteCampaignModal.defaultProps = {
  buttonVariant: undefined,
}