async function getCharacter(characterId) {
  let character

  try {
    character = await fetch(
      `/characters/${characterId}`
    )
    const characterData = await character.json()

    return characterData
  } catch (error) {
    return { error }
  }
}

export { getCharacter }