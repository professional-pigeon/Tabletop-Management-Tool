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

export { getCharacter }