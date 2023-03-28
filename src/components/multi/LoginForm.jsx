import { Flex, Button, Text, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { areTextFieldsValidated } from '../../lib/textValidators'
import TextInput from '../single/TextInput'
import HiddenInput from '../single/HiddenInput'
import { loginCall } from '../../lib/login'

export default function LoginForm() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const loginCallWrapper = () => {
    if (areTextFieldsValidated([userName, password])) {
      loginCall(userName, password)
        .then((res) => {
          if (res.error) {
            throw new Error(res.error)
          } else {
            router.push('/campaign')
          }
        })
        .catch(() => toast({
          title: 'Error',
          description: 'Error with User name or password',
          status: 'error',
          duration: 9000,
          isClosable: true,
        }))
    } else {
      return setHasError(true)
    }
  }
  return (
    <Flex direction='column' w='33%' p='.25rem' borderRadius='.5rem' boxShadow='lg'>
      <Text>Login</Text>
      <VStack>
        <TextInput 
          name={'User Name'} 
          inputValue={userName} 
          setInputValue={setUserName}
          error={hasError ? userName == '' : false } 
        />
        <HiddenInput 
          name={'Password'} 
          inputValue={password} 
          setInputValue={setPassword}
          error={hasError ? password == '' : false}
        />
      </VStack>
      <Button onClick={() => loginCallWrapper(userName, password)}>Login</Button>
    </Flex>
  )
}
