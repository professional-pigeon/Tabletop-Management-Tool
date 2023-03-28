import { Flex, Heading, Text } from '@chakra-ui/react'
import { getCharacter } from '@/lib/character'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { characterId } = router.query
  const [character, setCharacter] = useState({})

  useEffect(() => {
    if (!characterId) return
    getCharacter(characterId).then((res) => setCharacter(res))
  }, [characterId])

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
