import React from "react";
import CharacterCard from "../../../components/multi/character/CharacterCard";
import { 
  character as characterObject 
} from "../../lib/constants";


export default {
  title: 'Components/Multi/Character/CharacterCard',
  component: CharacterCard,
};

function Template(args) {
  const { character } = args
  return <CharacterCard character={character} campaignId={1} />
}

export const Primary = Template.bind({});
Primary.args = { character: characterObject }