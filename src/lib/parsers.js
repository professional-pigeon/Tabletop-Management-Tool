const toCamel = (str) => str.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase()
      .replace('-', '')
      .replace('_', ''));

const isArray = (a) => Array.isArray(a);

const isObject = (obj) => obj === Object(obj) && !isArray(obj) && typeof obj !== 'function';

const keysToCamel = (obj) => {
  if (isObject(obj)) {
    const n = {};

    Object.keys(obj)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(obj[k]);
      });

    return n;
  } 
  if (isArray(obj)) {
    return obj.map((i) => keysToCamel(i));
  }

  return obj;
};


const parseCampaignToSelects = (campaign) => {
  const selectArr = [{ id: campaign.id, name: `Campaign: ${campaign.name}`, placeType: 'Campaign'}];
  campaign.locations?.forEach((loc) => {
    selectArr.push({ id: loc.id, name: loc.name, placeType: 'Location' })
  })
  return selectArr
}

export { keysToCamel, parseCampaignToSelects }