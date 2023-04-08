import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { getCampaign } from '../campaign'

export default function useCampaigns() {
  const router = useRouter()
  const { campaignId } = router.query
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    console.log(campaignId, 'id')
    if (!campaignId) return
    getCampaign(campaignId).then((res) => setCampaign(res))
  }, [campaignId])

  return { campaign, setCampaign }
};