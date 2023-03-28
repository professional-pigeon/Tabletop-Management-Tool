import { Box, Center } from '@chakra-ui/react'
import React from 'react'
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
