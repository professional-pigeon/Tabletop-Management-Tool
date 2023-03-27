import { Box, Text, Flex, UnorderedList, ListItem } from '@chakra-ui/react'

export default function CharacterCard({ character }) {
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
      h='12.5rem' 
      borderRadius='.25rem' 
      boxShadow='base'
    >
      <Flex direction='column' py='.5rem' px='1rem'>
        <Text align='center' fontSize='lg' fontWeight='bold'>{`${name} (${characterRace})`}</Text>
        <Text noOfLines={3}>
          {`Description: `}
          <Text as='span' fontSize='sm' >
            {description.substring(0, 100)}
          </Text>
        </Text>
        <Text>{`Located: ${characterLocation.name}`}</Text>
        <Text>Notes below</Text>
        <UnorderedList>
          {notes.length > 0 && notes.map((note) => {
            <Text key={`note ${note.id}`}>{note.content}</Text>
          })}
        </UnorderedList>
      </Flex>
    </Box>
  )
}