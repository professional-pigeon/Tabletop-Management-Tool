import { Box, Text } from '@chakra-ui/react'
import { userAgent } from 'next/server'

export default function Header({ user }) {
  const { name } = user
  return (
    <Box bg='blue.200'>
      <Text>Welcome {name}</Text>
    </Box>
  )
}