import { Flex, Text, HStack, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCampaigns, deleteCampaign } from '../../lib/campaign'
import AddCampaignModal from '../../components/multi/campaign/AddCampaignModal'
import Layout from '../../components/single/Layout'
import { authUser } from '@/lib/user'

export default function Index(props) {
  const { user } = props;
  console.log(user)
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
