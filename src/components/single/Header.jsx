/* eslint-disable react/prop-types */
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { logoutCall } from '../../lib/login';

export default function Header({ user }) {
  const { name = '' } = user || {};
  const router = useRouter()

  const logoutWrap = () => {
    logoutCall().then(() => router.push('/login'))
  };
  
  return (
    <Box bg='blue.200' p='1rem' mb='1rem' boxShadow='md'>
      <Flex direction='row' justifyContent='space-around'>
        <Text>Campaign Manager</Text>
        <Text>Welcome {name}</Text>
        <Text as='button' onClick={() => logoutWrap()}>Logout</Text>
      </Flex>
    </Box>
  );
};