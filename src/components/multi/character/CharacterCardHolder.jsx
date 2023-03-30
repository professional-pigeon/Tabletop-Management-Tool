import { Flex } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { characterShape } from '../../../lib/propShapes';

export default function CharacterCardHolder({ characters, campaignId }) {
  return (
    <Flex direction='row' gap='1rem' flexWrap='wrap' p='1rem'>
    {characters.length > 0 && characters.map((character) => 
      <CharacterCard 
        key={`${character.id} ${character.name}`} 
        character={character} 
        campaignId={campaignId} 
      />
      )}
    </Flex>
  );
};

CharacterCardHolder.propTypes = {
  characters: PropTypes.arrayOf(characterShape).isRequired,
  campaignId: PropTypes.number,
};

CharacterCardHolder.defaultProps = {
  campaignId: 0
};