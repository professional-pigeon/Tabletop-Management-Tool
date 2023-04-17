import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { campaignShape } from '../../../lib/propShapes';
import DeleteCampaignModal from './DeleteCampaignModal';

export default function CampaignListItem({ campaign, setCampaigns, campaigns }) {
  const { id, name } = campaign
  return (
    <HStack w='24rem' justifyContent='space-between' p='.5rem' borderRadius='.5rem' bg='blue.100'>
      <Link 
        href="/campaign/[campaignId]" 
        as={`/campaign/${id}`}
      >
        <Text fontSize='xl'>{name}</Text>
      </Link>
      <DeleteCampaignModal campaignId={id} campaigns={campaigns} setCampaigns={setCampaigns} />
    </HStack>
  );
};

CampaignListItem.propTypes = {
  campaign: campaignShape.isRequired,
  campaigns: PropTypes.arrayOf(campaignShape).isRequired,
  setCampaigns: PropTypes.func.isRequired
}