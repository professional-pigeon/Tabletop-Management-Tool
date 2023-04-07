import { Flex, Button, Text, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { areTextFieldsValidated } from '../../lib/textValidators';
import TextInput from '../single/TextInput';
import HiddenInput from '../single/HiddenInput';
import signUpCall from '../../lib/user';

export default function SignUpForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [hasError, setHasError] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const passwordError = (passwordToCheck) => {
    if (password !== passwordConfirm) {
      return true
    }
    if (passwordToCheck === '') {
      return true
    }
    return false
  }

  const passwordErrorMessage = (passwordToCheck) => {
    if (password !== passwordConfirm) {
      return 'passwords do not match'
    }
    if (passwordToCheck === '') {
      return 'field cannot be blank'
    }
    return ''
  }

  const signUpCallWrapper = () => {
    if (areTextFieldsValidated([userName, email, password, passwordConfirm])) {
      return signUpCall(userName, email, password)
        .then((res) => {
          if (res.error) {
            throw new Error(res.error)
          } else {
            router.push('/campaign')
          }
        })
        .catch((error) => toast({
          title: 'Error',
          description: `${error}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        }
      ));
    };
      return setHasError(true);
  };

  return (
    <Flex direction='column' w='33%' p='.25rem' borderRadius='.5rem' boxShadow='lg'>
      <Text>Sign Up</Text>
      <VStack>
        <TextInput 
          name="User Name" 
          inputValue={userName} 
          setInputValue={setUserName}
          error={hasError ? userName === '' : false } 
        />
        <TextInput 
          name="Email" 
          inputValue={email} 
          setInputValue={setEmail}
          error={hasError ? email === '' : false } 
        />
        <HiddenInput 
          name="Password" 
          inputValue={password} 
          setInputValue={setPassword}
          error={hasError ? passwordError(password) : false}
          errorMessage={passwordErrorMessage(password)}
        />
        <HiddenInput 
          name="Confirm Password" 
          inputValue={passwordConfirm} 
          setInputValue={setPasswordConfirm}
          error={hasError ? passwordError(passwordConfirm) : false}
          errorMessage={passwordErrorMessage(passwordConfirm)}
        />
        <Button onClick={() => signUpCallWrapper()}>Sign up</Button>
      </VStack>
    </Flex>
  );
};
