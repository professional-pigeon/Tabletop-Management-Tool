import { Flex, Box, Text, HStack, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cookies from 'cookies'
import Link from 'next/link'
import { getCampaigns, deleteCampaign } from '../../lib/campaign'
import AddCampaignModal from '../../components/multi/campaign/AddCampaignModal'
import Layout from '../../components/single/Layout'

export default function Index(props) {
  const { user } = props;
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    getCampaigns().then((res) => setCampaigns(res))
  }, [])

  const deleteCampaignWrap = (campaignId) => {
    deleteCampaign(campaignId).then(() => {
      const newCampaigns = campaigns.filter((obj) => obj.id !== campaignId)
      setCampaigns(newCampaigns)
    })
  }

  return (
    <Layout user={user}>
        <Flex direction='column' w='65%'>
          <Text>All campaigns</Text>
          {campaigns.length > 0 && campaigns.map((campaign) => 
            <HStack key={`${campaign.name} ${campaign.id}`}>
              <Link 
              href="/campaign/[campaignId]" 
              as={`/campaign/${campaign.id}`}
              >
                {campaign.name}
              </Link>
              <Button onClick={() => deleteCampaignWrap(campaign.id)}>Delete me</Button>
            </HStack>
          )}
          <AddCampaignModal campaigns={campaigns} setCampaigns={setCampaigns} />
        </Flex>
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
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
