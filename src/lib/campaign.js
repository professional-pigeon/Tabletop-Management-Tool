async function getCampaign(campaignId) {
  let campaign

  try {
    campaign = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/campaigns/${campaignId}`
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}

export { getCampaign }