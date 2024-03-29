import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { campaignShape } from '../../../lib/propShapes';
import DeleteCampaignModal from './DeleteCampaignModal';

export default function CampaignListItem({ campaign, setCampaigns, campaigns }) {
  const { id, name } = campaign
  return (
    <Link 
    href="/campaign/[campaignId]"
    as={`/campaign/${id}`}
  >
    <HStack 
      w='full' 
      justifyContent='space-between' 
      p='.5rem' 
      borderRadius='.5rem' 
      bg='gray.50'
      border='1px solid'
      borderColor='black'
      _hover={{ bg: 'cyan.100'}}
    >
        <Text fontSize='xl'>{name}</Text>

      <DeleteCampaignModal 
        campaignId={id} 
        campaigns={campaigns} 
        setCampaigns={setCampaigns} 
        buttonVariant='delete'
      />
    </HStack>
    </Link>
  );
};

CampaignListItem.propTypes = {
  campaign: campaignShape.isRequired,
  campaigns: PropTypes.arrayOf(campaignShape).isRequired,
  setCampaigns: PropTypes.func.isRequired
}