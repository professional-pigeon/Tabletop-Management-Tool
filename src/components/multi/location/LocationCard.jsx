import { Box, Text, Flex, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { locationShape } from '../../../lib/propShapes';

export default function LocationCard({ location }) {
  const { 
    name, 
    description, 
    notes, 
    locationType,
    innerLocations,
  } = location;

  return (
    <Box 
      minW='15rem'
      w='30%'
      maxW='18rem'
      h='15rem' 
      borderRadius='.25rem' 
      boxShadow='base'
    >
      <Flex direction='column' py='.5rem' px='1rem'>
        <Text align='center' fontSize='lg' fontWeight='bold'>{`${name} (${locationType})`}</Text>
        <Text noOfLines={2}>
          {`Description: `}
          <Text as='span' fontSize='sm' >
            {description}
          </Text>
        </Text>
        <Text>Inner Locations</Text>
        <UnorderedList>
          {innerLocations.length === 0 && <Text>{`${innerLocations[0].name}`}</Text>}
          {innerLocations.length > 1 && <Text>{`${innerLocations[0].name}, + ${innerLocations.length -1} more`}</Text>}
        </UnorderedList>
        <Text>Notes</Text>
        <UnorderedList>
          {notes.length > 0 && <Text noOfLines={2}>{`${notes[0].updatedAt}: ${notes[0].content}`}</Text>}
          {notes.length > 1 && <Text>+ {notes.length -1} more</Text>}
        </UnorderedList>
      </Flex>
    </Box>
  );
};

LocationCard.propTypes = {
  location: locationShape.isRequired,
};

LocationCard.defaultProps = {
};