async function getLocation(locationId) {
  let location

  try {
    location = await fetch(
      `/locations/${locationId}`
    )
    const locationData = await location.json()

    return locationData
  } catch (error) {
    return { error }
  }
}

async function addLocation(params) {
  let location
  const { campaignId, locationType, name, description } = params

  try {
    location = await fetch(
      `/locations`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          campaign_id: campaignId, 
          name, 
          description, 
          location_type: locationType
        }),
      }
    )
    const newLocation = await location.json()

    return newLocation
  } catch (error) {
    return { error }
  }

}

export { getLocation, addLocation }
