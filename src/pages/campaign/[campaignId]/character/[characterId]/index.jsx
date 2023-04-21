/* eslint-disable no-unused-vars */
import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'
import useCharacters from '../../../../../lib/hooks/useCharacters'
import Layout from '../../../../../components/single/Layout'
import { authUser } from '../../../../../lib/user'
import { userShape } from '../../../../../lib/propShapes'
import FeatureHolder from '../../../../../components/single/FeatureHolder'
import UpdateCharacterModal from '../../../../../components/multi/character/UpdateCharacterModal'
import { CampaignIdProvider } from '../../../../../components/context/CampaignIdContext'
import AddNoteModal from '../../../../../components/multi/note/AddNoteModal'
import NoteList from '../../../../../components/multi/note/NoteList'

export default function Index(props) {
  const { user } = props
  const router = useRouter()
  const { campaignId } = router.query
  const { character, setCharacter } = useCharacters()

  return (
    <CampaignIdProvider id={parseInt(campaignId, 10)}>
      <Layout user={user}>
        <Flex direction='column' w='100vw' p='1rem'>
          <Heading>Character: {character.name}</Heading>
          <Flex direction='row' gap={6} w='full'>
            <FeatureHolder>
              <UpdateCharacterModal 
                character={character} 
                setCharacter={setCharacter}
                initialPlace={character.characterLocation} 
                buttonVariant='update-modal'
              />
              <AddNoteModal place={character} setPlace={setCharacter} placeType='Character' buttonVariant='add-modal'/>
            </FeatureHolder>
            <NoteList place={character} setPlace={setCharacter} notes={character.notes} />
          </Flex>
        </Flex>
      </Layout>
      </CampaignIdProvider>
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