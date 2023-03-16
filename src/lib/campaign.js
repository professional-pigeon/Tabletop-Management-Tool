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
  const { userId, name, notes } = params
  console.log(userId, name, notes)

  try {
    campaign = await fetch(
      '/campaigns',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          user_id: userId,
          name,
          notes: 'hi'
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