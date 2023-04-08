import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getLocation } from '../location'

export default function useLocations() {
  const router = useRouter()
  const { locationId } = router.query
  const [location, setLocation] = useState({})

  useEffect(() => {
    if (!locationId) return
    getLocation(locationId).then((res) => setLocation(res))
  }, [locationId])

  return { location, setLocation }
};