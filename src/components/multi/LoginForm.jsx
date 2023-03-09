import { Flex, Button, Text, VStack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { loginCall } from '@/lib/login'

export default function LoginCard() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Flex direction='column' w='33%' p='.25rem' borderRadius='.5rem' boxShadow='lg'>
      <Text>Login</Text>
      <VStack>
        <Text>User Name</Text>
        <Input value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <Text>Password</Text>
        <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
      </VStack>
      <Button onClick={() => loginCall(userName, password)}>Login</Button>
    </Flex>
  )
}
