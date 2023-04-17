/* eslint-disable no-unused-vars */
import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import useCharacters from '../../../../../lib/hooks/useCharacters'
import Layout from '../../../../../components/single/Layout'
import { authUser } from '../../../../../lib/user'
import { userShape } from '../../../../../lib/propShapes'

export default function Index(props) {
  const { user } = props
  const { character, setCharacter } = useCharacters()

  return (
    <Layout user={user}>
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

Index.propTypes = {
  user: userShape.isRequired
}