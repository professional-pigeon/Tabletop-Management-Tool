import { Flex, HStack, Heading, Button } from '@chakra-ui/react';
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { getCampaigns, deleteCampaign } from '../../../lib/campaign';
import AddCampaignModal from './AddCampaignModal';

export default function CampaignListHolder() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    getCampaigns().then((res) => setCampaigns(res))
  }, [])

  const deleteCampaignWrap = (campaignId) => {
    deleteCampaign(campaignId).then(() => {
      const newCampaigns = campaigns.filter((obj) => obj.id !== campaignId)
      setCampaigns(newCampaigns)
    })
  }
  return (
    <Flex direction='column' w='24rem' px='1rem' py='.5rem' borderRadius='.5rem' boxShadow='lg' gap={2}>
      <Heading>All Campaigns</Heading>
      {campaigns.length > 0 && campaigns.map((campaign) => 
        <HStack key={`${campaign.name} ${campaign.id}`}>
          <Link 
            href="/campaign/[campaignId]" 
            as={`/campaign/${campaign.id}`}
          >
            {campaign.name}
          </Link>
          <Button onClick={() => deleteCampaignWrap(campaign.id)}>Delete me</Button>
        </HStack>
      )}
      <AddCampaignModal campaigns={campaigns} setCampaigns={setCampaigns} />
    </Flex>
  );
};