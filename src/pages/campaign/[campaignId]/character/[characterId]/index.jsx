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
    getCharacter(1).then((res) => setCharacter(res))
  }, [characterId])
  console.log('hi')

  return (
    <Box>
      <Text>hi I am a character page</Text>
    </Box>
  )
}
