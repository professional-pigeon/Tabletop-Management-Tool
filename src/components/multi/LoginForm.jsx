import { Flex, Button, Text, VStack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { areTextFieldsValidated } from '@/lib/textValidators'
import TextInput from '../single/TextInput'

export default function LoginCard() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  const loginCallWrapper = (userName, password) => {
    if (areTextFieldsValidated([userName, password])) {
      return console.log('if true here')
    } else {
      setHasError(true)
      return console.log('if false here')
    }
  }

  return (
    <Flex direction='column' w='33%' p='.25rem' borderRadius='.5rem' boxShadow='lg'>
      <Text>Login</Text>
      <VStack>
        <TextInput name={'User Name'} inputValue={userName} setInputValue={setUserName}/>
        <TextInput name={'Password'} inputValue={password} setInputValue={setPassword}/>
      </VStack>
      <Button onClick={() => loginCallWrapper(userName, password)}>Login</Button>
    </Flex>
  )
}
