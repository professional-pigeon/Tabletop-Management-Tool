import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { getCampaign } from '../../../lib/campaign'
import AddLocationModal from '../../../components/multi/location/AddLocationModal'
import AddCharacterModal from '../../../components/multi/character/AddCharacterModal'
import TabSwitch from '../../../components/multi/TabSwitch'

export default function Index() {
  const router = useRouter()
  const { campaignId } = router.query
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    if (!campaignId) return
    getCampaign(campaignId).then((res) => setCampaign(res))
  }, [campaignId])

  return (
    <Flex direction='column' w='100vw' px='4rem' py='1rem'>
      <Heading>Campaign: {campaign.name}</Heading>
      <Flex direction='row' w='100%' gap={4}>
        <Flex direction='column' w='30%'>
          <Text>Features:</Text>
          <AddLocationModal isAddingInnerLocation={false} campaignId={campaign.id} place={campaign} setPlace={setCampaign} />
          <AddCharacterModal initialLocation={campaign} setInitialLocation={setCampaign} campaignId={campaign.id} />
        </Flex>
        <TabSwitch locations={campaign.locations} characters={campaign.characters} campaignId={campaign.id} />
      </Flex>
    </Flex>
  )
}