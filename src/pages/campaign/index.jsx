import { Flex, Box, Text, HStack, Button } from '@chakra-ui/react'
import { getCampaigns, deleteCampaign } from '@/lib/campaign'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import AddCampaignModal from '@/components/multi/campaign/AddCampaignModal'


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
            <HStack key={`${campaign.name} ${campaign.id}`}>
              <Link 
              href="/campaign/[id]" 
              as={`/campaign/${campaign.id}`}
              >
                {campaign.name}
              </Link>
              <Button onClick={() => deleteCampaign(campaign.id)}>Delete me</Button>
            </HStack>
          )}
          <AddCampaignModal campaigns={campaigns} setCampaigns={setCampaigns} />
        </Flex>
    </Box>
  )
}
