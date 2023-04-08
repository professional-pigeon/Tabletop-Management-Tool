import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useCharacters from '../../../../../lib/hooks/useCharacters'

export default function Index() {
  const { character, setCharacter } = useCharacters()

  return (
    <Flex direction='column' w='100vw' p='1rem'>
      <Heading>Character: {character.name}</Heading>
      <Flex direction='column'>
        <Text>{character.description}</Text>
        <Text>{character.characterRace}</Text>
        <Text>{character.characterType}</Text>
      </Flex>
    </Flex>
  )
}
