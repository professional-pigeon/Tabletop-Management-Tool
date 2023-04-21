/* eslint-disable no-unused-vars */
import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import useCharacters from '../../../../../lib/hooks/useCharacters'
import Layout from '../../../../../components/single/Layout'
import { authUser } from '../../../../../lib/user'
import { userShape } from '../../../../../lib/propShapes'
import FeatureHolder from '../../../../../components/single/FeatureHolder'
import UpdateCharacterModal from '../../../../../components/multi/character/UpdateCharacterModal'

export default function Index(props) {
  const { user } = props
  const { character, setCharacter } = useCharacters()

  return (
    <Layout user={user}>
      <Flex direction='column' w='100vw' p='1rem'>
        <Heading>Character: {character.name}</Heading>
        <FeatureHolder>
          <UpdateCharacterModal 
            character={character} 
            initialPlace={character.characterLocation} 
            buttonVariant='update'
          />
        </FeatureHolder>
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