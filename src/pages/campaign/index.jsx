import { Box, Text } from '@chakra-ui/react'
import getCampaign from '@/lib/campaign'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    getCampaign(1).then((res) => console.log('hi', res))
  })
  return (
    <Box>
      <Text>hi I am the campaign page</Text>
    </Box>
  )
}
