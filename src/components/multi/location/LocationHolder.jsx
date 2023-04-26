import { Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import LocationCard from './LocationCard';
import { locationShape } from '../../../lib/propShapes';

export default function LocationHolder({ locations }) {
  return (
    <Flex direction='row' gap='1rem' flexWrap='wrap' p='1rem'>
      {locations?.length > 0 && locations.map((location) => 
        <LocationCard 
          key={`${location.id} ${location.name}`} 
          location={location} 
        />
      )}
    </Flex>
  );
};

LocationHolder.propTypes = {
  locations: PropTypes.arrayOf(locationShape),
};

LocationHolder.defaultProps = {
  locations: [],
};