import { Box, Flex, Button, Text, HStack, Heading } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCampaign } from '../../../lib/campaign'
import { deleteLocation } from '../../../lib/location'
import AddLocationModal from '../../../components/multi/location/AddLocationModal'
import AddCharacterModal from '../../../components/multi/character/AddCharacterModal'
import CharacterCardHolder from '../../../components/multi/character/CharacterCardHolder'
import LocationHolder from '@/components/multi/location/LocationHolder'
import TabSwitch from '@/components/multi/TabSwitch'

export default function Index() {
  const router = useRouter()
  const { campaignId } = router.query
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    if (!campaignId) return
    getCampaign(campaignId).then((res) => setCampaign(res))
  }, [campaignId])

  return (
    <Flex direction='column' w='100vw' p='1rem'>
      <Heading>Campaign: {campaign.name}</Heading>
      <Flex direction='column'>
        <TabSwitch locations={campaign.locations} characters={campaign.characters} />
        <AddLocationModal isAddingInnerLocation={false} campaignId={campaign.id} place={campaign} setPlace={setCampaign} />
        <AddCharacterModal initialLocation={campaign} setInitialLocation={setCampaign} campaignId={campaign.id} />
      </Flex>
    </Flex>
  )
}