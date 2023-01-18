import { Box } from '@chakra-ui/react'
import Header from './Header'

export default function Layout({ user, children }) {
  return (
    <Box>
      <Header user={user} />
      {children}
    </Box>
  )
}