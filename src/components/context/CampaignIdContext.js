import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const CampaignIdContext = React.createContext()

export function useCampaignIdContext() {
  return useContext(CampaignIdContext)
}

export function CampaignIdProvider({ children, id }) {
  
  return (
    <CampaignIdContext.Provider value={id}>
      {children}
    </CampaignIdContext.Provider>
  );
};

CampaignIdProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  id: PropTypes.number,
}

CampaignIdProvider.defaultProps = {
  id: null,
}