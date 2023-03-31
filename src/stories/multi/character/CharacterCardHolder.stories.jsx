import React from "react";
import CharacterCardHolder from "../../../components/multi/character/CharacterCardHolder";
import { 
  character as characterObject 
} from "../../lib/constants";

const characterArray = [characterObject, characterObject, characterObject, characterObject, characterObject, characterObject, characterObject]

export default {
  title: 'Components/Multi/Character/CharacterCardHolder',
  component: CharacterCardHolder,
};

function Template(args) {
  const { characters } = args
  return <CharacterCardHolder characters={characters} campaignId={1} />
}

export const Primary = Template.bind({});
Primary.args = { characters: characterArray }