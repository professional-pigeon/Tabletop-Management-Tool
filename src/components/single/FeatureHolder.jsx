import { Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'

export default function FeatureHolder({ children }) {
  
  return (
      <Flex direction='column' w='30%' gap={2} pt={3}>
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