import { Box } from '@chakra-ui/react'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <Box bg='red.200'>
      <Header />
      {children}
    </Box>
  )
}