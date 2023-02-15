export default async function getSubLocation(subLocationID) {
  let subLocation

  try {
    subLocation = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/sublocations/${subLocationId}`
    )
    const subLocationData = await subLocation.json()

    return subLocationData
  } catch (error) {
    return { error }
  }
}