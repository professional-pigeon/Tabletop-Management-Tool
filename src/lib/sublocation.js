export default async function getSubLocation(subLocationId) {
  let subLocation

  try {
    subLocation = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sub_locations/${subLocationId}`
    )
    const subLocationData = await subLocation.json()

    return subLocationData
  } catch (error) {
    return { error }
  }
}