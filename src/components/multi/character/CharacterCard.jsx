import { Box, Button, Text, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link'
import { characterShape } from '../../../lib/propShapes';
import DeleteCharacterModal from './DeleteCharacterModal';
import CardNoteList from '../note/CardNoteList';
import { useCampaignIdContext } from '../../context/CampaignIdContext';


export default function CharacterCard({ character }) {
  const { 
    id,
    name, 
    description, 
    notes, 
    characterLocation,
    characterRace 
  } = character;
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
        w='100%'
        minH='15rem'
        gap={4}
      >
      <Flex direction='column' gap={2}>
        <Text align='center' fontSize='lg' fontWeight='bold' textDecor='underline'>{`${name} (${characterRace})`}</Text>
          <Text noOfLines={2}>
            {`Description: `}
            <Text as='span' fontSize='sm' >
              {description}
            </Text>
          </Text>
          <Text>
            {`Located: `}
            <Text as='span' fontSize='sm' >
              {characterLocation.name}
            </Text>
          </Text>
          <CardNoteList notes={notes} />
        </Flex>
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
};