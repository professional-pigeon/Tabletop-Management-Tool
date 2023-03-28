import React from "react";
import LocationCard from "../../../components/multi/location/LocationCard";

export default {
  title: 'Components/Multi/Character/LocationCard',
  component: LocationCard,
};

function Template(args) {
  return <LocationCard location={{}} />
}

export const Primary = Template.bind({});
Primary.args = { }