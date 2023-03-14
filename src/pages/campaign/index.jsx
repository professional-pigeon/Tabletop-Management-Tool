import { Button, Flex, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { getCampaigns } from '@/lib/campaign'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Index() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    getCampaigns().then((res) => setCampaigns(res))
  }, [])

  return (
    <Box>
        <Flex direction='column' w='65%'>
          <Text>All campaigns</Text>
          {campaigns.length > 0 && campaigns.map((campaign) => 
            <Link 
            href="/campaign/[id]" 
            as={`/campaign/${campaign.id}`}
            key={`${campaign.name} ${campaign.id}`}
            >
              {campaign.name}
            </Link>
          )}
          <Button>Create new campaign</Button>
        </Flex>
    </Box>
  )
}
