import { HStack, Button, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteCampaign } from '../../../lib/campaign';
import { campaignShape } from '../../../lib/propShapes';

export default function CampaignListItem({ campaign, setCampaigns, campaigns }) {
  const deleteCampaignWrap = (campaignId) => {
    deleteCampaign(campaignId).then(() => {
      const newCampaigns = campaigns.filter((obj) => obj.id !== campaignId)
      setCampaigns(newCampaigns)
    })
  }
  return (
    <HStack w='24rem' justifyContent='space-between' p='.5rem' borderRadius='.5rem' bg='blue.100'>
      <Link 
        href="/campaign/[campaignId]" 
        as={`/campaign/${campaign.id}`}
      >
        <Text fontSize='xl'>{campaign.name}</Text>
      </Link>
      <Button onClick={() => deleteCampaignWrap(campaign.id)}>Delete</Button>
    </HStack>
  );
};

CampaignListItem.propTypes = {
  campaign: campaignShape.isRequired,
  campaigns: PropTypes.arrayOf(campaignShape).isRequired,
  setCampaigns: PropTypes.func.isRequired
}