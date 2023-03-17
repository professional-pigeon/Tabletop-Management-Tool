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
    getSubLocation(subLocationId).then((res) => setsubLocation(res))
  }, [subLocationId])

  console.log(subLocation)
  return (
    <Box>
      <Text>hi</Text>
    </Box>
  )
}