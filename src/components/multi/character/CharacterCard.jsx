import { Box, Text, Flex } from '@chakra-ui/react'

export default function CharacterCard({ character }) {
  const { 
    name, 
    description, 
    notes, 
    characterLocation,
    characterRace 
  } = character
  return (
    <Box>
      <Flex direction='column'>
      <Text>{`${name} (${characterRace})`}</Text>
      <Text>Description: {description}</Text>
      <Text>Located: {characterLocation.name}</Text>
      <Text>Notes below</Text>
      {notes.length > 0 && notes.map((note) => {
        <Text key={`note ${note.id}`}>{note.content}</Text>
      })}
      </Flex>
    </Box>
  )
}