import getSubLocation from '@/lib/sublocation'
import { Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'


export default function Index() {
  useEffect(() => {
    getSubLocation(1).then((res) => console.log('hi', res))
  })
  return (
    <Box>
      <Text>hi I am the sublocation page</Text>
    </Box>
  )
}
