import React from "react";
import LocationHolder from "../../../components/multi/location/LocationHolder";
import { 
  location as locationSample, 
} from "../../lib/constants";

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

