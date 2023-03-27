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
  description: "Hi! This is a very long substring that should be cut off N number of characters and then appended with an ellipses. If it goes over this length on the card you shouldn't be able to see me until we get to the character page",
  name: "Charles",
  notes: [
      {
          id: 2,
          content: "this is the second note for this character",
          updatedAt: '03/27/2023'
      },
      {
          id: 1,
          content: "this is the first set of note text for the character",
          updatedAt: '03/26/2023'
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