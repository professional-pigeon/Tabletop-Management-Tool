import React from "react";
import CharacterCard from "../components/multi/character/CharacterCard";

const character = {
  id: 2,
  characterLocation: {
      id: 1,
      name: "city"
  },
  characterRace: "orc",
  characterType: "pc",
  description: "hi",
  name: "Charles",
  notes: [
      {
          id: 2,
          content: "this is the second note for this character"
      },
      {
          id: 1,
          content: "this is the first set of note text for the character"
      }
  ]
}

export default {
  title: 'Components/Multi/CharacterCard',
  component: CharacterCard,
};

const Template = (args) => <CharacterCard {...args} />;

export const Primary = Template.bind({});
Primary.args = { character }