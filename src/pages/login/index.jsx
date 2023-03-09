import { Box, Text, Button } from '@chakra-ui/react'
import { loginCall } from '@/lib/login'

export default function Index() {
  return (
    <Box>
      <Text>Log in here</Text>
      <Button onClick={() => loginCall('admin kk', 'test123')}>login</Button>
    </Box>
  )
}
