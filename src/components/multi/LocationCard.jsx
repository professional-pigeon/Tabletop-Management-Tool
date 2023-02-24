import { Flex, Button, Text, VStack, HStack } from '@chakra-ui/react'

export default function LocationCard({ id, name, notes, description }) {
  return (
    <Flex direction='column' bg='green.500' w='33%' h='fit' p='.25rem' gap='1rem'>
      <Text>{name}</Text>
      <VStack>
        <Text w='full'>Description</Text>
        <Text>{description || 'nada'}</Text>
      </VStack>
      <VStack>
        <Text w='full'>Notes</Text>
        <Text>{notes || 'nada'}</Text>
      </VStack>
      <Button>Go to</Button>
    </Flex>
  )
}

