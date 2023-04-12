import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import SignUpForm from '../../components/multi/SignUpForm'
import Layout from '../../components/single/Layout'

export default function Index() {
  return (
    <Layout>
      <Box w='100%'>
        <Center>
          <SignUpForm />
        </Center>
      </Box>
    </Layout>
  )
}
