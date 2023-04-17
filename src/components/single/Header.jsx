/* eslint-disable react/prop-types */
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { logoutCall } from '../../lib/login';

export default function Header({ user }) {
  const { userName = '' } = user || {};
  const router = useRouter()

  const logoutWrap = () => {
    logoutCall().then(() => router.push('/login'))
  };
  
  return (
    <Box bg='blue.200' px='4rem' py='1rem' mb='1rem' boxShadow='md'>
      <Flex direction='row'>
        <Text w='33%'>Campaign Manager</Text>
        <Text w='33%' textAlign='center'>Welcome {userName}</Text>
        <Text  w='33%'as='button' onClick={() => logoutWrap()}>Logout</Text>
      </Flex>
    </Box>
  );
};