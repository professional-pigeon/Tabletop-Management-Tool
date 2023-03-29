import {
  arrayOf,
  number,
  shape,
  string,
} from 'prop-types';

const noteShape = shape({
  id: number,
  content: string,
  updatedAt: string
})

const characterLocationShape = shape({
  id: number,
  name: string
})

const characterShape = shape({
  id: number,
  name: string,
  characterType: string,
  characterRace: string,
  description: string,
  characterLocation: characterLocationShape,
  notes: arrayOf(noteShape)
})

const innerLocationShape = shape({
  id: number,
  name: string,
  locationType: string,
  description: string,
  characters: arrayOf(characterShape),
  notes: arrayOf(noteShape),
  upperLocation: {
    id: number,
    name: string
  }
})

const locationShape = shape({
  id: number,
  name: string,
  locationType: string,
  description: string,
  characters: arrayOf(characterShape),
  notes: arrayOf(noteShape),
  innerLocations: arrayOf(innerLocationShape),
  upperLocation: {
    id: number,
    name: string
  }
})

const campaignShape = shape({
  id: number,
  name: string,
  notes: arrayOf(noteShape),
  locations: arrayOf(locationShape),
  characters: arrayOf(characterShape)
})

export { noteShape, characterShape, locationShape, campaignShape } 