import { Flex } from '@chakra-ui/react'
import React from 'react';
import CharacterCard from './CharacterCard'

export default function CharacterCardHolder({ characters }) {
  return (
    <Flex direction='row' gap='1rem' flexWrap='wrap' p='1rem'>
    {characters.length > 0 && characters.map((character) => 
      <CharacterCard key={`${character.id} ${character.name}`} character={character} />
      )}
    </Flex>
  )
}