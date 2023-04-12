import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useCharacters from '../../../../../lib/hooks/useCharacters'
import Layout from '../../../../../components/single/Layout'
import { authUser } from '@/lib/user'

export default function Index() {
  const { character, setCharacter } = useCharacters()

  return (
    <Layout>
      <Flex direction='column' w='100vw' p='1rem'>
        <Heading>Character: {character.name}</Heading>
        <Flex direction='column'>
          <Text>{character.description}</Text>
          <Text>{character.characterRace}</Text>
          <Text>{character.characterType}</Text>
        </Flex>
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const user = await authUser(req)

  if (!user.userName) {
    return { 
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return { props: { user } }
}