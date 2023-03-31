import { Box, Tabs, TabPanel, TabPanels, TabList, Tab} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CharacterCardHolder from './character/CharacterCardHolder';
import LocationHolder from './location/LocationHolder';

export default function TabSwitch({ locations, characters, campaignId }) {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <Box w='100%'>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>Locations</Tab>
          <Tab>Characters</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {locations?.length > 0 && <LocationHolder locations={locations} campaignId={campaignId} />}
          </TabPanel>
          <TabPanel>
            {characters?.length > 0 && <CharacterCardHolder characters={characters} campaignId={campaignId} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
};