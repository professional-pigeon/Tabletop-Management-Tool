import { Box, Flex, Button, Text, HStack, Heading } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getCampaign } from '@/lib/campaign'
import { deleteLocation } from '@/lib/location'
import AddLocationModal from '@/components/multi/location/AddLocationModal'
import Link from 'next/link'
import AddCharacterModal from '@/components/multi/character/AddCharacterModal'
import CharacterCardHolder from '@/components/multi/character/CharacterCardHolder'

export default function Index() {
  const router = useRouter()
  const { campaignId } = router.query
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    if (!campaignId) return
    getCampaign(campaignId).then((res) => setCampaign(res))
  }, [campaignId])

  const deleteLocationWrap = (locationId) => {
    deleteLocation(locationId).then(() => {
      let newCampaign = campaign
      const newLocations = campaign.locations.filter((obj) => obj.id !== locationId)
      newCampaign.locations = newLocations
      setCampaign(newCampaign)
    })
  }

  console.log(campaign)

  return (
    <Flex direction='column' w='100vw' p='1rem'>
      <Heading>Campaign: {campaign.name}</Heading>
      <Flex direction='column'>
        <Flex direction='row'>
          <Box>
          {campaign.locations?.length > 0 && campaign.locations.map((location) => 
            <HStack key={`${location.name} ${location.id}`}>
              <Link 
              href="/campaign/[campaignId]/location/[locationId]" 
              as={`/campaign/${campaignId}/location/${location.id}`}
              >
                {location.name}
              </Link>
              <Button onClick={() => deleteLocationWrap(location.id)}>Delete</Button>
            </HStack>)}
          </Box>
          <Flex direction='column' w='50%'>
        <Text>Characters associated</Text>
        {campaign.characters?.length > 0 && <CharacterCardHolder characters={campaign.characters} />}
        </Flex>
      </Flex>
      <AddLocationModal isAddingInnerLocation={false} campaignId={campaign.id} place={campaign} setPlace={setCampaign} />
      <AddCharacterModal initialLocation={campaign} setInitialLocation={setCampaign} campaignId={campaign.id} />
      </Flex>
    </Flex>
  )
}