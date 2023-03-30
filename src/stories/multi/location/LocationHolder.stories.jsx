import React from "react";
import LocationHolder from "../../../components/multi/location/LocationHolder";

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

const locationArr = [locationSample, locationSample, locationSample, locationSample, locationSample];

export default {
  title: 'Components/Multi/Location/LocationHolder',
  component: LocationHolder,
};

function Template(args) {
  const { locations } = args
  return <LocationHolder locations={locations} />
}

export const Primary = Template.bind({});
Primary.args = { locations: locationArr }

