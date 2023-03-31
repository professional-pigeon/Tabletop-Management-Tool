import { Box, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import { locationShape } from '../../../lib/propShapes';

export default function CardInnerLocationsList({ innerLocations }) {
  return (
    <Box>
      <Text>Inner Locations</Text>
      <UnorderedList>
        {innerLocations.length === 0 && <Text>No inner locations</Text>}
        {innerLocations.length === 1 && <Text>{`${innerLocations[0].name}`}</Text>}
        {innerLocations.length > 1 && <Text>{`${innerLocations[0].name}, + ${innerLocations.length -1} more`}</Text>}
      </UnorderedList>
    </Box>
  );
};

CardInnerLocationsList.propTypes = {
  innerLocations: PropTypes.arrayOf(locationShape)
};

CardInnerLocationsList.defaultProps = {
  innerLocations: []
};