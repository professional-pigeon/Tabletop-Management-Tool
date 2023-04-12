/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import theme from '../theme/theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}