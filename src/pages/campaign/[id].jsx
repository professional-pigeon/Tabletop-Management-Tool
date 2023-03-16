import { Flex, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getCampaign } from '@/lib/campaign'
import AddLocationModal from '@/components/multi/AddLocationModal'

export default function DynamicPage() {
  const router = useRouter()
  const { query: { id } } = router
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    getCampaign(id).then((res) => setCampaign(res))
  }, [])

  console.log(campaign.locations?.length)
  return (
    <Flex direction='column'>
      <Text>{campaign.name}</Text>
      {campaign.locations?.length > 0 && campaign.locations.map((location) => 
        <Text key={location.name}>{location.name}</Text>)}
      <AddLocationModal campaignId={campaign.id} campaign={campaign} setCampaign={setCampaign} />
    </Flex>
  )
}