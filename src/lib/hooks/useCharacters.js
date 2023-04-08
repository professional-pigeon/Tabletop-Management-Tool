import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getCharacter } from '../character'

export default function useCharacters() {
  const router = useRouter()
  const { characterId } = router.query
  const [character, setCharacter] = useState({})

  useEffect(() => {
    if (!characterId) return
    getCharacter(characterId).then((res) => setCharacter(res))
  }, [characterId])

  return { character, setCharacter }
};