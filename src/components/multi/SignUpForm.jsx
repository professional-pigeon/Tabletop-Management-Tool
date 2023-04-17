import { Flex, Button, Heading, VStack, useToast } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { areTextFieldsValidated } from '../../lib/textValidators';
import TextInput from '../single/TextInput';
import HiddenInput from '../single/HiddenInput';
import { signUpCall } from '../../lib/user';

export default function SignUpForm() {
  const userNameRef = useRef()
  const emailRef = useRef()
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
    if (areTextFieldsValidated([userNameRef.current.value, emailRef.current.value, password, passwordConfirm])) {
      return signUpCall(userNameRef.curent.value, emailRef.current.value, password)
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
    <Flex direction='column' w='24rem' px='1rem' py='.5rem' borderRadius='.5rem' boxShadow='lg' gap={2}>
      <Heading textAlign='center'>Sign Up</Heading>
      <VStack>
        <TextInput 
          name="User Name" 
          valueRef={userNameRef}
          error={hasError ? userNameRef.current.value === '' : false } 
        />
        <TextInput 
          name="Email" 
          valueRef={emailRef}
          error={hasError ? emailRef.current.value === '' : false } 
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
