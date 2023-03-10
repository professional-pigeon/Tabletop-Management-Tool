async function getSubLocation(subLocationId) {
  let subLocation

  try {
    subLocation = await fetch(
      `/sub_locations/${subLocationId}`
    )
    const subLocationData = await subLocation.json()

    return subLocationData
  } catch (error) {
    return { error }
  }
}

export { getSubLocation}