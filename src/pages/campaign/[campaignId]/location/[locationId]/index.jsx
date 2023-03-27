import { Button, Text, HStack, Flex, Heading } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getLocation } from '@/lib/location'
import Link from 'next/link'
import AddCharacterModal from '@/components/multi/character/AddCharacterModal'
import AddLocationModal from '@/components/multi/location/AddLocationModal'

export default function Index() {
  const router = useRouter()
  const { locationId, campaignId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])
  console.log(location)
  
  return (
    <Flex direction='column' w='100vw' p='1rem'>
      <Heading>Location: {location.name}</Heading>
      <Flex direction='column'>
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
            <Button onClick={() => console.log('delete me')}></Button>
          </HStack>
        )}
        <Text>Characters associated</Text>
        {location.characters?.length > 0 && location.characters.map((character) => 
          <HStack key={`${character.name} ${character.id}`}>
            <Link 
            href="/campaign/[campaignId]/character/[characterId]" 
            as={`/campaign/${campaignId}/character/${character.id}`}
            >
              {character.name}
            </Link>
          </HStack>
        )}
        <AddLocationModal campaignId={campaignId} place={location} setPlace={setLocation} isAddingInnerLocation={true} />
        <AddCharacterModal place={location} setPlace={setLocation} campaignId={campaignId} />
      </Flex>
    </Flex>
  )
}