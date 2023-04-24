import { Flex, Text, VStack, Heading } from '@chakra-ui/react';
import React from 'react';

export default function About() {

  return (
    <Flex direction='column' w='26rem' px='2rem' py='1rem' borderRadius='.5rem' boxShadow='lg' gap={2} bg='white'>
      <Heading textAlign='center'>About</Heading>
      <VStack>
        <Text textIndent='2rem'>Hi, this is a TTRPG management app. Created for use by myself and a few friends, if you have questions or requests for features please email kyle.kayperez@gmail.com.</Text>
        <Text textIndent='2rem'>This front end app uses React, Next.js, Storybook, and Chakra UI; a component library which has strengths in theme application, aria functions, and accessibility features.</Text>
        <Text textIndent='2rem'>The api is also self-built and hosted on Heroku and was made using RoR. I chose to keep them separate as I was most recently working at a company that was transitioning their RoR front end to Next.js and I like the separation of functionality.</Text>
      </VStack>
    </Flex>
  );
};
