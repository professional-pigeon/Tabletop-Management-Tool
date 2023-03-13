async function getCampaigns(campaignId) {
  let campaigns

  try {
    campaigns = await fetch(
      `user/campaigns`
    )
    const campaignsData = await campaigns.json()

    return campaignsData
  } catch (error) {
    return { error }
  }
}

export { getCampaigns }