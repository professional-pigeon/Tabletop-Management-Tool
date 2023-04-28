import { Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function FeatureHolder({ children }) {
  
  return (
      <Flex direction='column' w='30%' gap={2} pt={3}>
        <Text fontSize='2xl' textDecor='underline'>Features</Text>
        <Button variant='link-base' leftIcon={<ArrowBackIcon />} onClick={() => Router.back()}>Go Back</Button>
        {children}
      </Flex>
  )
};

FeatureHolder.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}