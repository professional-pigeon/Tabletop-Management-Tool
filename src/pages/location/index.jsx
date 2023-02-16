import { Box, Text } from '@chakra-ui/react'
import getLocation from '@/lib/location'
import { useEffect } from 'react'


export default function Index() {
  useEffect(() => {
    getLocation(1).then((res) => console.log('hi', res))
  })
  return (
    <Box>
      <Text>hi I am a location page</Text>
    </Box>
  )
}
