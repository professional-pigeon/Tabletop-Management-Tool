import { Flex, Heading } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React from 'react'
import AddCharacterModal from '../../../../../components/multi/character/AddCharacterModal'
import AddLocationModal from '../../../../../components/multi/location/AddLocationModal'
import TabSwitch from '../../../../../components/multi/TabSwitch'
import FeatureHolder from '../../../../../components/single/FeatureHolder'
import { CampaignIdProvider } from '../../../../../components/context/CampaignIdContext'
import UpdateLocationModal from '../../../../../components/multi/location/UpdateLocationModal'
import useLocations from '../../../../../lib/hooks/useLocations'
import Layout from '../../../../../components/single/Layout'
import { authUser } from '../../../../../lib/user'
import { userShape } from '../../../../../lib/propShapes'
import AddNoteModal from '../../../../../components/multi/note/AddNoteModal'
import NoteList from '../../../../../components/multi/note/NoteList'

export default function Index(props) {
  const { user } = props
  const router = useRouter()
  const { campaignId } = router.query
  const { location, setLocation } = useLocations()

  return (
    <CampaignIdProvider id={parseInt(campaignId, 10)}>
      <Layout user={user}>
        <Flex direction='column' w='100vw' px='4rem' py='1rem'>
          <Heading>Location: {location.name}</Heading>
          <Flex direction='row' w='100%' gap={6} pt='2rem'>
            <FeatureHolder>
              <UpdateLocationModal place={location} setPlace={setLocation} />
              <AddLocationModal place={location} buttonVariant='add-modal' setPlace={setLocation} isAddingInnerLocation />
              <AddCharacterModal initialPlace={location} buttonVariant='add-modal' setInitialPlace={setLocation} />
              <AddNoteModal place={location} setPlace={setLocation} placeType='Location' buttonVariant='add-modal'/>
              <NoteList place={location} setPlace={setLocation} notes={location.notes} />
            </FeatureHolder>
            <TabSwitch locations={location.innerLocations} characters={location.characters} />
          </Flex>
        </Flex>
      </Layout>
    </CampaignIdProvider>
  )
};

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