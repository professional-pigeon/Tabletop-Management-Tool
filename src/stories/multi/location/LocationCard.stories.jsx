import React from "react";
import LocationCard from "../../../components/multi/location/LocationCard";

export default {
  title: 'Components/Multi/Character/LocationCard',
  component: LocationCard,
};

const Template = (args) => <LocationCard {...args} />;

export const Primary = Template.bind({});
Primary.args = { }