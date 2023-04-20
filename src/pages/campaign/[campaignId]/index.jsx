import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AddLocationModal from '../../../components/multi/location/AddLocationModal'
import AddCharacterModal from '../../../components/multi/character/AddCharacterModal'
import TabSwitch from '../../../components/multi/TabSwitch'
import FeatureHolder from '../../../components/single/FeatureHolder'
import { CampaignIdProvider } from '../../../components/context/CampaignIdContext'
import useCampaigns from '../../../lib/hooks/useCampaigns'
import Layout from '../../../components/single/Layout'
import { authUser } from '../../../lib/user'
import { userShape } from '../../../lib/propShapes'

export default function Index(props) {
  const { user } = props
  const { campaign, setCampaign } = useCampaigns()

  return (
    <CampaignIdProvider id={parseInt(campaign.id, 10)}>
      <Layout user={user}>
        <Flex direction='column' w='100vw' px='4rem' py='1rem'>
          <Heading>Campaign: {campaign.name}</Heading>
          <Flex direction='row' w='100%' gap={6} pt='2rem'>
            <FeatureHolder>
              <Text fontSize='2xl' textDecor='underline'>Features</Text>
              <AddLocationModal isAddingInnerLocation={false} buttonVariant='add-modal' place={campaign} setPlace={setCampaign} />
              <AddCharacterModal initialPlace={campaign} setInitialPlace={setCampaign} />
            </FeatureHolder>
            <TabSwitch locations={campaign.locations} characters={campaign.characters} />
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