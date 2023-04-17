import { Flex, Heading} from '@chakra-ui/react';
import React from 'react';
import AddCampaignModal from './AddCampaignModal';
import useAllCampaigns from '../../../lib/hooks/useAllCampaigns';
import CampaignListItem from './CampaignListItem';

export default function CampaignListHolder() {
  const { campaigns, setCampaigns } = useAllCampaigns()

  return (
    <Flex direction='column' px='1rem' py='.5rem' borderRadius='.5rem' boxShadow='lg' gap={2}>
      <Heading>All Campaigns</Heading>
      {campaigns.length > 0 && campaigns.map((campaign) => 
        <CampaignListItem key={`${campaign.name} ${campaign.id}`} campaign={campaign} campaigns={campaigns} setCampaigns={setCampaigns} />
      )}
      <AddCampaignModal campaigns={campaigns} setCampaigns={setCampaigns} />
    </Flex>
  );
};