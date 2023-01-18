import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/single/Layout'

export default function App({ Component, pageProps }) {
  const user = { name: 'Kyle' }
  return (
    <ChakraProvider>
      <Layout user={user}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}