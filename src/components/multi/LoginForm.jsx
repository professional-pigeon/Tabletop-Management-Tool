import { Flex, Button, Text, VStack, useToast, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { areTextFieldsValidated } from '../../lib/textValidators';
import StateTextInput from '../single/StateTextInput';
import HiddenInput from '../single/HiddenInput';
import { loginCall } from '../../lib/login';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const loginCallWrapper = () => {
    if (areTextFieldsValidated([userName, password])) {
      return loginCall(userName, password)
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
        }
      ));
    };
      return setHasError(true);
  };

  return (
    <Flex direction='column' w='33%' px='1rem' py='.5rem' borderRadius='.5rem' boxShadow='lg' gap={2}>
      <Heading textAlign='center'>Login</Heading>
      <VStack>
        <StateTextInput 
          name="User Name" 
          inputValue={userName} 
          setInputValue={setUserName}
          error={hasError ? userName === '' : false } 
        />
        <HiddenInput 
          name="Password" 
          inputValue={password} 
          setInputValue={setPassword}
          error={hasError ? password === '' : false}
        />
        <Button w='50%' onClick={() => loginCallWrapper(userName, password)}>Login</Button>
        <Link 
          href='/signup'
          as='/signup'
        >
          <Text color='blue.700' fontWeight='semibold'>Create new account</Text>
        </Link>
      </VStack>
    </Flex>
  );
};
