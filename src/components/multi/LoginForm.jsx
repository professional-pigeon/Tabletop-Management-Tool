import { Flex, Button, Text, VStack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { loginCall } from '@/lib/login'
import TextInput from '../single/TextInput'

export default function LoginCard() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Flex direction='column' w='33%' p='.25rem' borderRadius='.5rem' boxShadow='lg'>
      <Text>Login</Text>
      <VStack>
        <TextInput name={'User Name'} inputValue={userName} setInputValue={setUserName}/>
        <TextInput name={'Password'} inputValue={password} setInputValue={setPassword}/>
      </VStack>
      <Button onClick={() => loginCall(userName, password)}>Login</Button>
    </Flex>
  )
}
