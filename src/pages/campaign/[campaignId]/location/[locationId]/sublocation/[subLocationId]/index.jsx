import { Box, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getSubLocation } from '@/lib/sublocation'
import Link from 'next/link'

export default function Index() {
  const router = useRouter()
  const { subLocationId } = router.query
  const [subLocation, setSubLocation] = useState({})

  useEffect(() => {
    if (!subLocationId) return
    getSubLocation(subLocationId).then((res) => setSubLocation(res))
  }, [subLocationId])

  console.log(subLocation)
  return (
    <Box>
      <Text>Welcome to the sublocation page for {subLocation.name}</Text>
      <Text>Description: {subLocation.description}</Text>
      <Text>Characters associated</Text>
      {subLocation.characters?.length > 0 && subLocation.characters.map((character) => 
        <HStack key={`${character.name} ${character.id}`}>
          <Link 
          href="/campaign/[campaignId]/character/[characterId]" 
          as={`/campaign/${campaignId}/character/${character.id}`}
          >
            {character.name}
          </Link>
        </HStack>
      )}
    </Box>
  )
}