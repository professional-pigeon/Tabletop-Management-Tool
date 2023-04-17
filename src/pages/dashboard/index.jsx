import { Flex } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/single/Layout'
import { authUser } from '../../lib/user'
import { userShape } from '../../lib/propShapes'
import CampaignListHolder from '../../components/multi/campaign/CampaignListHolder'
import About from '../../components/single/About'

export default function Index(props) {
  const { user } = props;

  return (
    <Layout user={user}>
      <Flex direction='row' w='100vw' px='4rem' py='1rem' gap={4}>
        <CampaignListHolder />
        <About />
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