import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <Flex direction='row' justifyContent='space-around'>
      <Text>Some welcome blurb here</Text>
      <Flex direction='column'>
        <Text>Links to pages</Text>
        <Link href='/location'>Locations</Link>
        <Link href='/location'>Characters</Link>
      </Flex>
    </Flex>
  )
}
