import { Box, Text } from '@chakra-ui/react'

export default function Header({ children }) {
  return (
    <Box bg='blue.200'>
      <Text>Welcome to dnd app</Text>
    </Box>
  )
}