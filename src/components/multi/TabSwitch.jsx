import { Box, Tabs, TabPanels, TabList, Tab} from '@chakra-ui/react';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TabSwitch({ tabs, children }) {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return (
    <Box w='100%'>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          {tabs.map((tab) => <Tab>{tab}</Tab>)}
        </TabList>
        <TabPanels>
            {children}
        </TabPanels>
      </Tabs>
    </Box>
  )
};

TabSwitch.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};