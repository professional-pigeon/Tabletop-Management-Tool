import { Box, Text } from '@chakra-ui/react'

export default function Location({ id, name }) {
  return (
    <Box>
      <Text>{name}</Text>
    </Box>
  )
}
