import { Box, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getSubLocation } from '@/lib/sublocation'
import Link from 'next/link'

export default function Index() {
  const router = useRouter()
  const { subLocationId } = router.query
  const [subLocation, setSubLocation] = useState({})

  useEffect(() => {
    if (!subLocationId) return
    getSubLocation(subLocationId).then((res) => setSubLocation(res))
  }, [subLocationId])

  return (
    <Box>
      <Text>Welcome to the sublocation page for {subLocation.name}</Text>
      <Text>Description: {subLocation.description}</Text>
    </Box>
  )
}