const note1 = {
  id: 1,
  content: "this is the first set of note text for the object",
  updatedAt: '03/26/2023'
}
const note2 = {
  id: 2,
  content: "this is the second note for this object",
  updatedAt: '03/27/2023'
}


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
  notes: [note2, note1]
};

const innerLocation = {
  id: 2,
  name: 'Shining Inn',
  locationType: 'Inn',
  description: 'A nice inn in Bartsville',
  characters: [],
  notes: [note2, note1],
  innerLocations: [],
  upperLocation: {
    id: 1, 
    name: 'Bartsville'
  }
};

const location = {
  id: 1,
  name: 'Bartsville',
  locationType: 'City',
  description: 'A modest port town where we last ran into some thief who stole a staff',
  characters: [],
  notes: [note2, note1],
  innerLocations: [innerLocation, innerLocation],
  upperLocation: null
};

const campaign = {
  id: 1,
  locations: [location, location],
  characters: [character],

}

export { character, location, innerLocation, campaign, note1 }