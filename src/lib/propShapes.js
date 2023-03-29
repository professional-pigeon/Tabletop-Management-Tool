import PropTypes from 'prop-types'

const noteShape = {
  id: PropTypes.string,
  content: PropTypes.string,
  updatedAt: PropTypes.string
}

const characterLocationShape = {
  id: PropTypes.string,
  name: PropTypes.string
}

const characterShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  characterType: PropTypes.string,
  characterRace: PropTypes.string,
  description: PropTypes.string,
  characterLocation: characterLocationShape,
  notes: PropTypes.arrayOf(noteShape)
}

const innerLocationShape = {
  id: PropTypes.string,
  name: PropTypes.string,,
  locationType: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.arrayOf(characterShape),
  notes: PropTypes.arrayOf(noteShape),
  upperLocation: {
    id: PropTypes.string,
    name: PropTypes.string
  }
}

const locationShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  locationType: PropTypes.string,
  description: PropTypes.string,
  characters: PropTypes.arrayOf(characterShape),
  notes: PropTypes.arrayOf(noteShape),
  innerLocations: PropTypes.arrayOf(innerLocationShape),
  upperLocation: {
    id: PropTypes.string,
    name: PropTypes.string
  }
}

const campaignShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  notes: PropTypes.arrayOf(noteShape),
  locations: PropTypes.arrayOf(locationShape),
  characters: PropTypes.arrayOf(characterShape)
}

export { noteShape, characterShape, locationShape, campaignShape } 