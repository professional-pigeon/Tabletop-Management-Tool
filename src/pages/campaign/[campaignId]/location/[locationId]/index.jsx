import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { getLocation } from '../../../../../lib/location'
import AddCharacterModal from '../../../../../components/multi/character/AddCharacterModal'
import AddLocationModal from '../../../../../components/multi/location/AddLocationModal'
import TabSwitch from '../../../../../components/multi/TabSwitch'

export default function Index() {
  const router = useRouter()
  const { locationId, campaignId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])
  
  return (
    <Flex direction='column' w='100vw' px='4rem' py='1rem'>
      <Heading>Location: {location.name}</Heading>
      <Flex direction='row' w='100%' gap={6} pt='2rem'>
        <Flex direction='column' w='30%' gap={2}>
          <Text fontSize='2xl' textDecor='underline'>Features</Text>
          <AddLocationModal campaignId={campaignId} place={location} setPlace={setLocation} isAddingInnerLocation />
          <AddCharacterModal place={location} setPlace={setLocation} campaignId={campaignId} />
        </Flex>
        <TabSwitch locations={location.innerLocations} characters={location.characters} campaignId={campaignId} />
      </Flex>
    </Flex>
  )
}