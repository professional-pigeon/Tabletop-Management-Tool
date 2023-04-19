import { Button } from '@chakra-ui/react'
import React from "react";

export default {
  title: 'Single/Button',
  component: Button,
};

function Template(args) {
  const { variant } = args
  return <Button variant={variant} />
}

export const Primary = Template.bind({});
Primary.args = { variant: '' }

export const CardDelete = Template.bind({});
Primary.args = { variant: 'card-delete' }