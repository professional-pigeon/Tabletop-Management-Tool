import React from "react";
import LocationCard from "../../../components/multi/location/LocationCard";
import { 
  location as locationSample, 
  innerLocation as innerLocationSample 
} from "../../lib/constants";

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

export const NoInnerLocations = Template.bind({});
NoInnerLocations.args = { location: innerLocationSample }

