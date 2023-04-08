import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { getCampaign } from '../../../lib/campaign'
import AddLocationModal from '../../../components/multi/location/AddLocationModal'
import AddCharacterModal from '../../../components/multi/character/AddCharacterModal'
import TabSwitch from '../../../components/multi/TabSwitch'
import FeatureHolder from '../../../components/single/FeatureHolder'
import { CampaignIdProvider } from '../../../components/context/CampaignIdContext'

export default function Index() {
  const router = useRouter()
  const { campaignId } = router.query
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    if (!campaignId) return
    getCampaign(campaignId).then((res) => setCampaign(res))
  }, [campaignId])

  return (
    <CampaignIdProvider id={parseInt(campaign.id, 10)}>
      <Flex direction='column' w='100vw' px='4rem' py='1rem'>
        <Heading>Campaign: {campaign.name}</Heading>
        <Flex direction='row' w='100%' gap={6} pt='2rem'>
          <FeatureHolder>
            <Text fontSize='2xl' textDecor='underline'>Features</Text>
            <AddLocationModal isAddingInnerLocation={false} place={campaign} setPlace={setCampaign} />
            <AddCharacterModal initialLocation={campaign} setInitialLocation={setCampaign} />
          </FeatureHolder>
          <TabSwitch locations={campaign.locations} characters={campaign.characters} />
        </Flex>
      </Flex>
    </CampaignIdProvider>
  )
}