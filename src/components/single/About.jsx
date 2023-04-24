import { Flex, Text, VStack, Heading } from '@chakra-ui/react';
import React from 'react';

export default function About() {

  return (
    <Flex direction='column' w='26rem' px='2rem' py='1rem' borderRadius='.5rem' boxShadow='lg' gap={2} bg='white'>
      <Heading textAlign='center'>About</Heading>
      <VStack>
        <Text textIndent='2rem'>Hi, this is a TTRPG management app. Created for use by myself and a few friends, if you have questions or requests for features please email kyle.kayperez@gmail.com.</Text>
        <Text textIndent='2rem'>If I do not know you personally and you have stumbled this app and would like to use it for your campaign, feel free to. Please reach out to let me know what you like about it and know that I am open to suggestions.</Text>
      </VStack>
    </Flex>
  );
};
