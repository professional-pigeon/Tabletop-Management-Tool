import { Box, Button, Text, Flex, UnorderedList, HStack } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'
import { characterShape } from '../../../lib/propShapes';
import DeleteCharacterModal from './DeleteCharacterModal';


export default function CharacterCard({ character, campaignId }) {
  const { 
    id,
    name, 
    description, 
    notes, 
    characterLocation,
    characterRace 
  } = character;

  return (
    <Box
      minW='15rem'
      w='30%'
      maxW='18rem'
      h='15rem' 
      borderRadius='.25rem' 
      boxShadow='base'
    >
      <Flex 
        direction='column' 
        py='.5rem' 
        px='1rem'
      >
        <Text align='center' fontSize='lg' fontWeight='bold'>{`${name} (${characterRace})`}</Text>
        <Text noOfLines={3}>
          {`Description: `}
          <Text as='span' fontSize='sm' >
            {description}
          </Text>
        </Text>
        <Text>{`Located: ${characterLocation.name}`}</Text>
        <Text>Notes</Text>
        <UnorderedList>
          {notes.length === 0 && <Text>no notes</Text>}
          {notes.length > 0 && <Text noOfLines={2}>{`${notes[0].updatedAt}: ${notes[0].content}`}</Text>}
          {notes.length > 1 && <Text>+ {notes.length -1} more</Text>}
        </UnorderedList>
      <HStack>
        <DeleteCharacterModal characterId={id} />
        <Button        
          as={Link}
          href={`/campaign/${campaignId}/character/${id}`}
        >
          Go to
        </Button>
      </HStack>
      </Flex>
    </Box>
  );
};

CharacterCard.propTypes = {
  character: characterShape.isRequired,
  campaignId: PropTypes.number,
};

CharacterCard.defaultProps = {
  campaignId: 0
};