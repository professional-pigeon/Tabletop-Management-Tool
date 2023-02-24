import { Box, Text } from '@chakra-ui/react'

export default function LocationCard({ id, name, notes, description }) {
  return (
    <Box bg='green.500' w='33%' h='150px'>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{notes}</Text>
    </Box>
  )
}
