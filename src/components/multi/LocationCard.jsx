import { Flex, Button, Text, VStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'
export default function LocationCard({ id, name, notes, description }) {
  return (
    <Flex direction='column' bg='green.500' w='33%' p='.25rem' gap='1rem'>
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

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  notes: PropTypes.string,
  id: PropTypes.number.isRequired
}

LocationCard.defaultProps ={
  description: 'tbd',
  notes: 'none'
}
