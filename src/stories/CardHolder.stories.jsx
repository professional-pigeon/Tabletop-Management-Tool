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

const characters = [character, character, character, character, character, character]

export default {
  title: 'Components/Multi/CardHolder',
  component: CardHolder,
};

const Template = (args) => <CardHolder {...args} />;

export const Primary = Template.bind({});
Primary.args = { characters }