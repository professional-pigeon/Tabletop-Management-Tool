import { Box, Text } from '@chakra-ui/react'
import getCharacter from '@/lib/character'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    getCharacter(1).then((res) => console.log('hi', res))
  })
  return (
    <Box>
      <Text>hi I am a character page</Text>
    </Box>
  )
}
