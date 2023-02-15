export default async function getCampaign(userId) {
  let campaign

  try {
    campaign = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/campaigns/${userId}`
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}
