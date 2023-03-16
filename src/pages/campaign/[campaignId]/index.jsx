import { Flex, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getCampaign } from '@/lib/campaign'
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

  return (
    <Flex direction='column'>
      <Text>{campaign.name}</Text>
      {campaign.locations?.length > 0 && campaign.locations.map((location) => 
        <HStack key={`${location.name} ${location.id}`}>
          <Link 
          href="/location/[locationId]" 
          as={`/location/${location.id}`}
          >
            {location.name}
          </Link>
        </HStack>)}
      <AddLocationModal campaignId={campaign.id} campaign={campaign} setCampaign={setCampaign} />
    </Flex>
  )
}