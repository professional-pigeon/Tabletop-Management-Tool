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
        <Flex direction='row'>
          <Flex direction='column'>
            <Text>Locations</Text>
            {campaign.locations?.length > 0 && (<LocationHolder locations={campaign.locations} campaignId={campaign.id} />)}
          </Flex>
          <Flex direction='column' w='50%'>
            <Text>Characters associated</Text>
              {campaign.characters?.length > 0 && <CharacterCardHolder characters={campaign.characters} campaignId={campaign.id} />}
            </Flex>
      </Flex>
      <AddLocationModal isAddingInnerLocation={false} campaignId={campaign.id} place={campaign} setPlace={setCampaign} />
      <AddCharacterModal initialLocation={campaign} setInitialLocation={setCampaign} campaignId={campaign.id} />
      </Flex>
    </Flex>
  )
}