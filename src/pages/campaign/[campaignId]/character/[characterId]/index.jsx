import { Box, Text } from '@chakra-ui/react'
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
  console.log(characterId, character)

  return (
    <Box>
      <Text>hi I am a character page</Text>
    </Box>
  )
}
