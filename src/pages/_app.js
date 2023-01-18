import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/single/Layout'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}