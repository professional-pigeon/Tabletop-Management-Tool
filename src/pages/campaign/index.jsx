import { Button, Flex, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { getCampaigns } from '@/lib/campaign'
import { useEffect, useState } from 'react'


export default function Index() {
  const [campaigns, setCampaigns] = useState([{}])

  useEffect(() => {
    getCampaigns().then((res) => setCampaigns(res))
  }, [])

  console.log(campaigns)
  return (
    <Box>
        <Flex direction='column' w='65%'>
          <Text>All campaigns</Text>
          {campaigns.map((campaign) => 
            <Text key={`${campaign.name} ${campaign.id}`}>{campaign.name}</Text>)}
        </Flex>
    </Box>
  )
}
