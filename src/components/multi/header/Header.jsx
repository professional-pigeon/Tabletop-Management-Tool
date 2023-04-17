import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { userShape } from '../../../lib/propShapes';
import HeaderMenu from './HeaderMenu';

export default function Header({ user }) {
  const { userName } = user
  
  return (
    <Box bg='blue.300' px='4rem' py='1rem' mb='2rem' boxShadow='lg' borderBottomRadius='sm'>
      <Flex direction='row'>
        <Text w='33%' fontSize='xl'>Campaign Manager</Text>
        <Text w='33%' textAlign='center' fontSize='xl'>Welcome {userName}</Text>
        <Flex w='33%' justifyContent='flex-end'>
          <HeaderMenu isLoggedIn={!!user?.userName}/>
        </Flex>
      </Flex>
    </Box>
  );
};

Header.propTypes = {
  user: userShape
}

Header.defaultProps = {
  user: {},
}