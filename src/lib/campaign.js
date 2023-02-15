export default async function getCampaign(user_id) {
  let campaign

  try {
    campaign = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/campaigns/${user_id}`
    )
    const campaignData = await campaign.json()

    return campaignData
  } catch (error) {
    return { error }
  }
}
