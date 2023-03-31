import { Box, Button, Text, Flex, UnorderedList, HStack } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'
import { characterShape } from '../../../lib/propShapes';
import DeleteCharacterModal from './DeleteCharacterModal';
import CardNoteList from '../note/CardNoteList';


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
      borderRadius='.25rem' 
      boxShadow='base'
      bg='white'
    >
      <Flex 
        direction='column' 
        py='.5rem' 
        px='1rem'
        w='100%'
        minH='15rem'
        justifyContent='space-between'
      >
        <Text align='center' fontSize='lg' fontWeight='bold'>{`${name} (${characterRace})`}</Text>
        <Text noOfLines={2}>
          {`Description: `}
          <Text as='span' fontSize='sm' >
            {description}
          </Text>
        </Text>
        <Text>{`Located: ${characterLocation.name}`}</Text>
        <CardNoteList notes={notes} />
      <HStack>
        <DeleteCharacterModal characterId={id} />
        <Button   
          size='sm'     
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