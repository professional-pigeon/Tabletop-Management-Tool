import { Flex, Button, Text, VStack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { areTextFieldsValidated } from '@/lib/textValidators'
import TextInput from '../single/TextInput'
import { loginCall } from '@/lib/login'

export default function LoginCard() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  const loginCallWrapper = (userName, password) => {
    if (areTextFieldsValidated([userName, password])) {
      loginCall(userName, password)
        .then((res) => {
          if (res.error) {
            throw new Error(res.error)
          } else {
            return console.log(res, 'sucess')
          }
        })
        .catch((error) => console.log(error, 'throw error toast'))
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
        <TextInput 
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
