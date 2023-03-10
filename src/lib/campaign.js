async function getCampaign(campaignId) {
  let campaign

  try {
    campaign = await fetch(
      `/campaigns/${campaignId}`
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}

export { getCampaign }