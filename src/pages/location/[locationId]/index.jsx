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
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])

  return (
    <Box>
      <Text>Name: {location.name}</Text>
      <Text>Description: {location.description}</Text>
      <Text>Type: {location.location_type}</Text>
    </Box>
  )
}