import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Cookies from 'cookies'
import LoginForm from '../../components/multi/LoginForm'
import Layout from '../../components/single/Layout'

export default function Index() {
  return (
    <Layout>
      <Box w='100%'>
        <Center>
          <LoginForm />
        </Center>
      </Box>
    </Layout>
  )
}

export async function getServerSideProps({req , res}) {
  const cookies = new Cookies(req, res)
	cookies.set('_api_tabletop_management_session')

  return {
    props: {},
  }
}
