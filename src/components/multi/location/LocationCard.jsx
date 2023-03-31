import { Box, Button, Text, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { locationShape } from '../../../lib/propShapes';
import DeleteLocationModal from './DeleteLocationModal';
import CardNoteList from '../note/CardNoteList';
import CardInnerLocationsList from './CardInnerLocationsList';

export default function LocationCard({ location, campaignId }) {
  const { 
    id,
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
      bg='white'
    >
      <Flex 
        direction='column' 
        py='.5rem' 
        px='1rem'
        minH='15rem'
        w='100%'
        justifyContent='space-between'
      >
        <Text align='center' fontSize='lg' fontWeight='bold'>{`${name} (${locationType})`}</Text>
        <Text noOfLines={2}>
          {`Description: `}
          <Text as='span' fontSize='sm' >
            {description}
          </Text>
        </Text>
        <CardInnerLocationsList innerLocations={innerLocations} />
        <CardNoteList notes={notes} />
        <HStack>
          <DeleteLocationModal locationId={id} />
          <Button
            size='sm'
            as={Link}
            href={`/campaign/${campaignId}/location/${id}`}
          >
            Go to
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

LocationCard.propTypes = {
  location: locationShape.isRequired,
  campaignId: PropTypes.number,
};

LocationCard.defaultProps = {
  campaignId: 0,
};