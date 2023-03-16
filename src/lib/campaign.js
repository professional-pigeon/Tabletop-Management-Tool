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

async function getCampaign(campaignId) {
  let campaign
  try {
    campaign = await fetch(`/campaigns/${campaignId}`)
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}

async function createCampaign(params) {
  let campaign
  const { name } = params

  try {
    campaign = await fetch(
      '/campaigns',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          name
        }),
      }
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}

async function deleteCampaign(campaignId) {
  let campaign
  try {
    campaign = await fetch(
      `/campaigns/${campaignId}`,
      {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
          campaign_id: campaignId
        }),
      }
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}

export { getCampaigns, createCampaign, deleteCampaign }