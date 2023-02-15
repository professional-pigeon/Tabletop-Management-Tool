export default async function getLocation(locationID) {
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
