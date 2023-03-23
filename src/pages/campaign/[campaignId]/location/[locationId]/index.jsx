import { Box, Button, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getLocation } from '@/lib/location'
import { deleteSubLocation } from '@/lib/sublocation'
import Link from 'next/link'
import AddSubLocationModal from '@/components/multi/sublocation/AddSubLocationModal'
import AddCharacterModal from '@/components/multi/character/AddCharacterModal'

export default function Index() {
  const router = useRouter()
  const { locationId, campaignId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])
  
  const deleteSubLocationWrap = (subLocationId) => { 
    deleteSubLocation(subLocationId).then(() => {
      const newLocation = location
      const newSubLocations = location.subLocations.filter((obj) => obj.id !== subLocationId)
      newLocation.subLocations = newSubLocations
      setLocation(newLocation)
    })
  }
  
  return (
    <Box>
      <Text>Name: {location.name}</Text>
      <Text>Description: {location.description}</Text>
      <Text>Type: {location.locationType}</Text>
      {location.subLocations?.length > 0 && location.subLocations.map((subLocation) => 
        <HStack key={`${subLocation.name} ${subLocation.id}`}>
          <Link 
          href="/campaign/[campaignId]/location/[locationId]/sublocation/[sublocationId]" 
          as={`/campaign/${campaignId}/location/${locationId}/sublocation/${subLocation.id}`}
          >
            {subLocation.name}
          </Link>
          <Button onClick={() => deleteSubLocationWrap(subLocation.id)}></Button>
        </HStack>)}
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
        <AddSubLocationModal locationId={location.id} location={location} setLocation={setLocation}/>
        <AddCharacterModal place={location} setPlace={setLocation} campaignId={campaignId} />
    </Box>
  )
}