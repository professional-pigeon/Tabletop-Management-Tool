import { Button, Flex, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router"

export default function DynamicPage() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  return <div>The dynamic route is {id}</div>
}