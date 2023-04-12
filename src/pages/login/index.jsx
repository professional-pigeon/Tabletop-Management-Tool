import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Cookies from 'cookies'
import LoginForm from '../../components/multi/LoginForm'

export default function Index() {
  return (
    <Box w='100%'>
      <Center>
        <LoginForm />
      </Center>
    </Box>
  )
}

export async function getServerSideProps({req , res}) {
  const cookies = new Cookies(req, res)
	cookies.set('_api_tabletop_management_session')

  return {
    props: {},
  }
}
