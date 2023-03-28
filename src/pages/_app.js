/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/single/Layout'
import theme from '../theme/theme'

export default function App({ Component, pageProps }) {
  const user = { name: 'Kyle' }
  return (
    <ChakraProvider theme={theme}>
      <Layout user={user}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}