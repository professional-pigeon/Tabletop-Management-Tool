import { Flex, Button, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getCampaign } from '@/lib/campaign'
import { deleteLocation } from '@/lib/location'
import AddLocationModal from '@/components/multi/location/AddLocationModal'
import Link from 'next/link'

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
    <Flex direction='column'>
      <Text>{campaign.name}</Text>
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
        <Text>Characters associated</Text>
        {campaign.characters?.length > 0 && campaign.characters.map((character) => 
          <HStack key={`${character.name} ${character.id}`}>
            <Link 
            href="/campaign/[campaignId]/character/[characterId]" 
            as={`/campaign/${campaignId}/character/${character.id}`}
            >
              {character.name}
            </Link>
          </HStack>
        )}
      <AddLocationModal campaignId={campaign.id} campaign={campaign} setCampaign={setCampaign} />
    </Flex>
  )
}