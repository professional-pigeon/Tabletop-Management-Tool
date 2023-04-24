import { Flex, Text, VStack, Heading } from '@chakra-ui/react';
import React from 'react';

export default function TechStack() {

  return (
    <Flex direction='column' w='26rem' px='2rem' py='1rem' borderRadius='.5rem' boxShadow='lg' gap={2} bg='white'>
      <Heading textAlign='center'>Tech Stack</Heading>
      <VStack>
        <Text textIndent='2rem'>This front end app uses React, Next.js, Storybook, and Chakra UI; a component library which has strengths in theme application, aria functions, and accessibility features.</Text>
        <Text textIndent='2rem'>The API/db is also self-built and maintained, hosted on Heroku, and was made using RoR.</Text>
      </VStack>
    </Flex>
  );
};
