import { Button, Flex, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import { getCampaign } from '@/lib/campaign'

export default function DynamicPage() {
  const router = useRouter()
  const { query: { id } } = router

  useEffect(() => {
    getCampaign(id).then((res) =>  console.log(res))
  }, [])

  return (
    <div>The dynamic route is {id}</div>
  )
}