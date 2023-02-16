export default async function getcharacter(characterId) {
  let character

  try {
    character = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/characters/${characterId}`
    )
    const characterData = await character.json()

    return characterData
  } catch (error) {
    return { error }
  }
}