import { Flex, ListItem, UnorderedList, Heading } from '@chakra-ui/react';
import React from 'react';

export default function ToDo() {

  return (
    <Flex direction='column' w='26rem' px='2rem' py='1rem' borderRadius='.5rem' boxShadow='lg' gap={2} bg='white'>
      <Heading textAlign='center'>Coming Features</Heading>
      <UnorderedList>
        <ListItem>Add dummy user for recruiters to use</ListItem>
        <ListItem>Move Notes to tabs or drawer for clarity</ListItem>
        <ListItem>Add Items, associate to characters, locations, campaigns</ListItem>
        <ListItem>Search campaign for text</ListItem>
      </UnorderedList>
    </Flex>
  );
};
