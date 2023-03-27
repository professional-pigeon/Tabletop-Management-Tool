import React from "react";
import CardHolder from "../components/multi/character/CardHolder";

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
          content: "this is the second note for this character"
      },
      {
          id: 1,
          content: "this is the first set of note text for the character"
      }
  ]
}

const characters = [character, character, character, character, character, character]

export default {
  title: 'Components/Multi/CardHolder',
  component: CardHolder,
};

const Template = (args) => <CardHolder {...args} />;

export const Primary = Template.bind({});
Primary.args = { characters }