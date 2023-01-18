import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      <Text>hi I am here</Text>
      <Link href='/location'>Locations</Link>
      <Link href='/location'>Characters</Link>
    </Box>
  )
}
