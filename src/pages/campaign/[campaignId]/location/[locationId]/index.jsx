import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from "next/router"
import React from 'react'
import Cookies from 'cookies'
import AddCharacterModal from '../../../../../components/multi/character/AddCharacterModal'
import AddLocationModal from '../../../../../components/multi/location/AddLocationModal'
import TabSwitch from '../../../../../components/multi/TabSwitch'
import FeatureHolder from '../../../../../components/single/FeatureHolder'
import { CampaignIdProvider } from '../../../../../components/context/CampaignIdContext'
import UpdateLocationModal from '../../../../../components/multi/location/UpdateLocationModal'
import useLocations from '../../../../../lib/hooks/useLocations'
import Layout from '../../../../../components/single/Layout'

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
            <Text fontSize='2xl' textDecor='underline'>Features</Text>
              <UpdateLocationModal place={location} setPlace={setLocation} />
              <AddLocationModal place={location} setPlace={setLocation} isAddingInnerLocation />
              <AddCharacterModal initialLocation={location} setInitialLocation={setLocation} />
            </FeatureHolder>
            <TabSwitch locations={location.innerLocations} characters={location.characters} />
          </Flex>
        </Flex>
      </Layout>
    </CampaignIdProvider>
  )
};

export async function getServerSideProps({ req }) {
	const cookies = new Cookies(req)

	// Get a cookie
  const hi = cookies.get('_api_tabletop_management_session')
  if (!hi) {
    return { 
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return { props: { user: { isLoggedIn: true, name: 'Kyle' }} }
}