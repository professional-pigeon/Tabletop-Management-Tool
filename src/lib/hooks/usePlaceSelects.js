
import { useState, useEffect } from 'react';
import { getAllLocations } from '../location';
import { useCampaignIdContext } from '../../components/context/CampaignIdContext';
import { parseCampaignToSelects } from '../parsers';

export default function usePlaceSelects() {
  const [selectOptions, setSelectOptions] = useState([]);
  const campaignId = useCampaignIdContext();

  useEffect(() => {
    if (!campaignId) return;
    getAllLocations(campaignId).then((res) => {
      const selects = parseCampaignToSelects(res)
      setSelectOptions(selects)
    });
  }, [campaignId]);

  return { selectOptions }
};