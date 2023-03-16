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

async function createCampaign(params) {
  let campaign
  const { name, notes } = params

  try {
    campaign = await fetch(
      '/campaigns',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          name,
          notes
        }),
      }
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}

export { getCampaigns, createCampaign }