import { Button, Text, HStack, Flex, Heading } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getLocation } from '../../../../../lib/location'
import AddCharacterModal from '../../../../../components/multi/character/AddCharacterModal'
import AddLocationModal from '../../../../../components/multi/location/AddLocationModal'
import CharacterCardHolder from '../../../../../components/multi/character/CharacterCardHolder'

export default function Index() {
  const router = useRouter()
  const { locationId, campaignId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])
  
  return (
    <Flex direction='column' w='100vw' p='1rem'>
      <Heading>Location: {location.name}</Heading>
      <Flex direction='column'>
        <Flex direction='row'>
          <Text>Description: {location.description}</Text>
          <Text>Type: {location.locationType}</Text>
          {location.upperLocation && (
            <Link
              href="/campaign/[campaignId]/location/[innerLocationId]" 
              as={`/campaign/${campaignId}/location/${location.upperLocation.id}`}
            >
              Back to {location.upperLocation.name}
            </Link>
          )}
          {location.innerLocations?.length > 0 && location.innerLocations.map((innerLocation) => 
            <HStack key={`${innerLocation.name} ${innerLocation.id}`}>
              <Link 
              href="/campaign/[campaignId]/location/[innerLocationId]" 
              as={`/campaign/${campaignId}/location/${innerLocation.id}`}
              >
                {innerLocation.name}
              </Link>
              <Button>Delete</Button>
            </HStack>
          )}
          <Flex direction='column'>
            <Text>Characters associated</Text>
            {location.characters?.length > 0 && <CharacterCardHolder characters={location.characters} />}
          </Flex>
        </Flex>
        <AddLocationModal campaignId={campaignId} place={location} setPlace={setLocation} isAddingInnerLocation />
        <AddCharacterModal place={location} setPlace={setLocation} campaignId={campaignId} />
      </Flex>
    </Flex>
  )
}