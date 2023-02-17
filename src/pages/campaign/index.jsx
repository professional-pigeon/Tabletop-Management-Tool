import { Box, Text } from '@chakra-ui/react'
import getCampaign from '@/lib/campaign'
import { useEffect, useState } from 'react'

export default function Index() {
  const [locations, setLocations] = useState([])
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    getCampaign(1).then((res) => {
      const { locations: locationData, ...campaignData } = res
      setLocations(locationData);
      setCampaign(campaignData);
  })}, [])

  return (
    <Box>
      <Text>hi I am the campaign page</Text>
    </Box>
  )
}
