import { useEffect, useState } from 'react'
import { getCampaigns } from '../campaign'

export default function useAllCampaigns() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    getCampaigns().then((res) => setCampaigns(res))
  }, [])

  return { campaigns, setCampaigns }
};