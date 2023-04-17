import { Flex, Text, VStack, Heading } from '@chakra-ui/react';
import React from 'react';

export default function About() {

  return (
    <Flex direction='column' w='24rem' px='1rem' py='.5rem' borderRadius='.5rem' boxShadow='lg' gap={2} bg='white'>
      <Heading textAlign='center'>About</Heading>
      <VStack>
        <Text textIndent='2rem'>Hi, this is a TTRPG management app. Created for use by myself and a few friends, if you have questions or requests for features please email kyle.kayperez@gmail.com.</Text>
        <Text textIndent='2rem'>If you are someone who is looking at this profile as part of a hiring team and would like to see a version with a lot of data please click here to log in as a test user</Text>
      </VStack>
    </Flex>
  );
};
