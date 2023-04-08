import { keysToCamel } from "./parsers"

async function getLocation(locationId) {
  let location

  try {
    location = await fetch(
      `/api/locations/${locationId}`
    )
    const locationData = await location.json()

    
    return keysToCamel(locationData)
  } catch (error) {
    return { error }
  }
}

async function getAllLocations(campaignId) {
  let location

  try {
    location = await fetch(
      `/api/campaign/locations/${campaignId}`
    )
    const locationData = await location.json()

    
    return keysToCamel(locationData)
  } catch (error) {
    return { error }
  }
}

async function addLocation(params) {
  let location
  const { campaignId, locationType, name, description, upperLocationId } = params

  try {
    location = await fetch(
      `/api/locations`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          campaign_id: campaignId, 
          name, 
          description, 
          location_type: locationType,
          upper_location_id: upperLocationId
        }),
      }
    )
    const newLocation = await location.json()

    return keysToCamel(newLocation)
  } catch (error) {
    return { error }
  }
}

async function deleteLocation(locationId) {
  let location
  try {
    location = await fetch(
      `/api/locations/${locationId}`,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          location_id: locationId
        }),
      }
    )
    const locationData = await location.json()

    return keysToCamel(locationData)
  } catch (error) {
    return { error }
  }
}

async function updateLocation(params) {
  let location
  const { 
    locationId,
    locationType, 
    name, 
    description, 
    upperLocationId 
  } = params
  
  try {
    location = await fetch(
      `/api/locations/${locationId}`,
      {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          name, 
          description, 
          location_type: locationType,
          upper_location_id: upperLocationId
        }),
      }
    )
    const locationData = await location.json()

    return keysToCamel(locationData)
  } catch (error) {
    return { error }
  }
}

export { getLocation, addLocation, deleteLocation, updateLocation, getAllLocations }
