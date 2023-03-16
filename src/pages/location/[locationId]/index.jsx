import { Box, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getLocation } from '@/lib/location'

export default function Index() {
  const router = useRouter()
  const { locationId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => console.log('hi', res))
  }, [locationId])

  return (
    <Box>
      <Text>hi I am a location page</Text>
    </Box>
  )
}