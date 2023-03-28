import { Box, Text, Flex, UnorderedList, ListItem } from '@chakra-ui/react'

export default function LocationCard({ character }) {
  const { 
    name, 
    description, 
    notes, 
    characterLocation,
    characterRace 
  } = character

  return (
    <Box 
      minW='15rem'
      w='30%'
      maxW='18rem'
      h='15rem' 
      borderRadius='.25rem' 
      boxShadow='base'
    >
      <Flex direction='column' py='.5rem' px='1rem'>
        <Text align='center' fontSize='lg' fontWeight='bold'>{`${name} (${characterRace})`}</Text>
        <Text noOfLines={3}>
          {`Description: `}
          <Text as='span' fontSize='sm' >
            {description}
          </Text>
        </Text>
        <Text>{`Located: ${characterLocation.name}`}</Text>
        <Text>Notes</Text>
        <UnorderedList>
          {notes.length > 0 && <Text noOfLines={2}>{`${notes[0].updatedAt}: ${notes[0].content}`}</Text>}
          {notes.length > 1 && <Text>+ {notes.length -1} more</Text>}
        </UnorderedList>
      </Flex>
    </Box>
  )
}