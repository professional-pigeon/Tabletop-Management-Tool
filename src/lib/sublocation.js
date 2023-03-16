async function getSubLocation(subLocationId) {
  let subLocation

  try {
    subLocation = await fetch(
      `/api/sub_locations/${subLocationId}`
    )
    const subLocationData = await subLocation.json()

    return subLocationData
  } catch (error) {
    return { error }
  }
}

async function addSubLocation(params) {
  let subLocation
  const { locationId, subLocationType, name, description } = params

  try {
    subLocation = await fetch(
      `/api/sub_locations`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          location_id: locationId, 
          name, 
          description, 
          sub_location_type: subLocationType
        }),
      }
    )
    const newSubLocation = await subLocation.json()

    return newSubLocation
  } catch (error) {
    return { error }
  }
}

export { getSubLocation, addSubLocation }