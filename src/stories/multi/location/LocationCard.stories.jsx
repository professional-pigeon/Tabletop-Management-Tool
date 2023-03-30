import React from "react";
import LocationCard from "../../../components/multi/location/LocationCard";

const innerLocation = {
  id: 2,
  name: 'Shining Inn',
  locationType: 'Inn',
  description: 'A nice inn in Bartsville',
  characters: [],
  notes: [
    {
        id: 2,
        content: "this is the second note for this location",
        updatedAt: '03/27/2023'
    },
    {
        id: 1,
        content: "this is the first set of note text for the location",
        updatedAt: '03/26/2023'
    }
  ],
  innerLocations: [],
  upperLocation: {
    id: 1, 
    name: 'Bartsville'
  }
};
const locationSample = {
  id: 1,
  name: 'Bartsville',
  locationType: 'City',
  description: 'A modest port town where we last ran into some thief who stole a staff',
  characters: [],
  notes: [
    {
        id: 2,
        content: "this is the second note for this location",
        updatedAt: '03/27/2023'
    },
    {
        id: 1,
        content: "this is the first set of note text for the location",
        updatedAt: '03/26/2023'
    }
  ],
  innerLocations: [innerLocation, innerLocation],
  upperLocation: null
};

export default {
  title: 'Components/Multi/Location/LocationCard',
  component: LocationCard,
};

function Template(args) {
  const { location } = args
  return <LocationCard location={location} />
}

export const Primary = Template.bind({});
Primary.args = { location: locationSample }

