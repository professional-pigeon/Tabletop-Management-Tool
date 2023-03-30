/* eslint-disable react/prop-types */
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Header({ user }) {
  const { name } = user;
  return (
    <Box bg='blue.200' p='1rem' mb='1rem' boxShadow='md'>
      <Flex direction='row' justifyContent='space-around'>
        <Text>Welcome {name}</Text>
      </Flex>
    </Box>
  );
};