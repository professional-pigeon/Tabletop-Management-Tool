import { Box, Button, Text, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import { locationShape } from '../../../lib/propShapes';
import DeleteLocationModal from './DeleteLocationModal';
import CardNoteList from '../note/CardNoteList';
import CardInnerLocationsList from './CardInnerLocationsList';
import { useCampaignIdContext } from '../../context/CampaignIdContext';


export default function LocationCard({ location }) {
  const { 
    id,
    name, 
    description, 
    notes, 
    locationType,
    innerLocations,
  } = location;
  const campaignId = useCampaignIdContext()

  return (
    <Box 
      minW='15rem'
      w='30%'
      maxW='18rem'
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
        <Flex direction='column' gap={2}>
          <Text align='center' fontSize='lg' fontWeight='bold' textDecor='underline'>{`${name} (${locationType})`}</Text>
          <Text noOfLines={2}>
            {`Description: `}
            <Text as='span' fontSize='sm' >
              {description}
            </Text>
          </Text>
          <CardInnerLocationsList innerLocations={innerLocations} />
          <CardNoteList notes={notes} />
        </Flex>
        <HStack>
          <DeleteLocationModal locationId={id} buttonVariant='card-delete'/>
          <Button
            variant='card-link'
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
};