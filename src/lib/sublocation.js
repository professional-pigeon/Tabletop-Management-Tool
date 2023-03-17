import { keysToCamel } from "./parsers"
async function getSubLocation(subLocationId) {
  let subLocation

  try {
    subLocation = await fetch(
      `/api/sub_locations/${subLocationId}`
    )
    const subLocationData = await subLocation.json()

    return keysToCamel(subLocationData)
  } catch (error) {
    return { error }
  }
}

async function addSubLocation(params) {
  let subLocation
  const { locationId, name, description } = params

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
        }),
      }
    )
    const newSubLocation = await subLocation.json()

    return keysToCamel(newSubLocation)
  } catch (error) {
    return { error }
  }
}

export { getSubLocation, addSubLocation }