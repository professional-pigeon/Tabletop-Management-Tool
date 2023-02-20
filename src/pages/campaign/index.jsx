import { Box, Text } from '@chakra-ui/react'
import getCampaign from '@/lib/campaign'
import { useEffect, useState } from 'react'
import Location from '@/components/multi/Location'

export default function Index() {
  const [locations, setLocations] = useState([])
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    getCampaign(1).then((res) => {
      const { locations: locationData, ...campaignData } = res
      setLocations(locationData);
      setCampaign(campaignData);
  })}, [])

  console.log(locations)
  return (
    <Box>
      <Text>hi I am the campaign page</Text>
      <Box>
      <Text>list of locations for {campaign.name}</Text>
        {locations.map((location) => <Location key={location.id} {...location} />)}
      </Box>
    </Box>
  )
}
