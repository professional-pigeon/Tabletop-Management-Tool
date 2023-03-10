import { Button, Flex, VStack, Box, Text, HStack } from '@chakra-ui/react'
import { getCampaign } from '@/lib/campaign'
import { useEffect, useState } from 'react'
import LocationCard from '@/components/multi/LocationCard'
import AddLocationModal from '@/components/multi/AddLocationModal'

export default function Index() {
  const [locations, setLocations] = useState([])
  const [campaign, setCampaign] = useState({})

  useEffect(() => {
    getCampaign(1).then((res) => {
      const { locations: locationData, ...campaignData } = res
      setLocations(locationData);
      setCampaign(campaignData);
  })}, [])

  console.log(locations)
  return (
    <Box>
      <Flex direction='row'>
        <Flex direction='column' w='35%'>
        <Text>{campaign.name}</Text>
        <Text>{campaign.notes || 'notes to go here'}</Text>
        </Flex>
        <Flex direction='column' w='65%'>
          <HStack justifyContent='space-between'>
            <Text>Locations #add sort type?#</Text>
            <AddLocationModal />
          </HStack>
          <Flex flexWrap={'wrap'} gap='.25rem'>
            {locations?.map((location) => <LocationCard key={location.id} {...location} />)}
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
            <LocationCard name='Zandria 2' />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
