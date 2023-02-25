async function getLocation(locationId) {
  let location

  try {
    location = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/locations/${locationId}`
    )
    const locationData = await location.json()

    return locationData
  } catch (error) {
    return { error }
  }
}

async function addLocation({ campaignId, name, description }) {
  let location

  try {
    location = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/locations`,
      {
        method: 'POST',
        body: JSON.stringify({ campaign_id: campaignId, name, description, notes: 'hi' }),
      }
    )
    const newLocation = await location.json()

    return newLocation
  } catch (error) {
    return { error }
  }

}

export { getLocation, addLocation }
