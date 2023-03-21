import { keysToCamel } from "./parsers"

async function getCharacter(characterId) {
  let character

  try {
    character = await fetch(
      `/api/characters/${characterId}`
    )
    const characterData = await character.json()

    return keysToCamel(characterData)
  } catch (error) {
    return { error }
  }
}

async function addCharacter(params) {
  let character

  const { 
    char_place_type: placeType, 
    char_place_id: placeId, 
    name, 
    description,
    characterType,
    characterRace, 
  } = params

  try {
    character = await fetch(
      `/api/characters`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          char_place_type: placeType, 
          char_place_id: placeId,
          name, 
          description, 
          character_type: characterType,
          character_race: characterRace
        }),
      }
    )
    const newCharacter = await character.json()

    return keysToCamel(newCharacter)
  } catch (error) {
    return { error }
  }
}

async function deleteCharacter(characterId) {
  let character
  try {
    character = await fetch(
      `/api/characters/${characterId}`,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          character_id: characterId
        }),
      }
    )
    const characterData = await character.json()

    return keysToCamel(characterData)
  } catch (error) {
    return { error }
  }
}

export { getCharacter, addCharacter, deleteCharacter }