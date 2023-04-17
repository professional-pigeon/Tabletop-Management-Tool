import { HStack, Button } from '@chakra-ui/react';
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
    <HStack key={`${campaign.name} ${campaign.id}`}>
      <Link 
        href="/campaign/[campaignId]" 
        as={`/campaign/${campaign.id}`}
      >
        {campaign.name}
      </Link>
      <Button onClick={() => deleteCampaignWrap(campaign.id)}>Delete me</Button>
    </HStack>
  );
};

CampaignListItem.propTypes = {
  campaign: campaignShape.isRequired,
  campaigns: PropTypes.arrayOf(campaignShape).isRequired,
  setCampaigns: PropTypes.func.isRequired
}