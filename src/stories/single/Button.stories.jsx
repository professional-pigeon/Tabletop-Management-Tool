import { Button, Flex } from '@chakra-ui/react'
import React from "react";

export default {
  title: 'Single/Button',
  component: Button,
};

function Template() {
  return (
    <Flex direction='row' flexWrap='wrap' gap={4}>
      <Button variant='delete'>Delete</Button>
      <Button variant='delete-card'>Delete</Button>
      <Button variant='link-base'>Go to</Button>
      <Button variant='link-card'>Go to</Button>
      <Button variant='add-modal'>Add Thing</Button>
      <Button variant='update-modal'>Update Thing</Button>
      <Button variant='update-card'>Update Thing</Button>
    </Flex>
  )
}


export const AllButtons = Template.bind({});
AllButtons.args = {}