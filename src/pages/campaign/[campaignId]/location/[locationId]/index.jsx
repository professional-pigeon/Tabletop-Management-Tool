import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { getLocation } from '../../../../../lib/location'
import AddCharacterModal from '../../../../../components/multi/character/AddCharacterModal'
import AddLocationModal from '../../../../../components/multi/location/AddLocationModal'
import TabSwitch from '../../../../../components/multi/TabSwitch'
import FeatureHolder from '../../../../../components/single/FeatureHolder'
import { CampaignIdProvider } from '../../../../../components/context/CampaignIdContext'

export default function Index() {
  const router = useRouter()
  const { locationId, campaignId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])
  
  return (
    <CampaignIdProvider id={parseInt(campaignId, 10)}>
      <Flex direction='column' w='100vw' px='4rem' py='1rem'>
        <Heading>Location: {location.name}</Heading>
        <Flex direction='row' w='100%' gap={6} pt='2rem'>
          <FeatureHolder>
          <Text fontSize='2xl' textDecor='underline'>Features</Text>
            <AddLocationModal campaignId={parseInt(campaignId, 10)} place={location} setPlace={setLocation} isAddingInnerLocation />
            <AddCharacterModal place={location} setPlace={setLocation} campaignId={parseInt(campaignId, 10)} />
          </FeatureHolder>
          <TabSwitch locations={location.innerLocations} characters={location.characters} campaignId={parseInt(campaignId, 10)} />
        </Flex>
      </Flex>
    </CampaignIdProvider>
  )
}