import { Button, Flex, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, AddIcon } from '@chakra-ui/icons';
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
      <IconButton variant='delete-icon' icon={<DeleteIcon />} />
      <Button variant='link-base'>Go to</Button>
      <Button variant='link-card'>Go to</Button>
      <Button variant='add-modal'>Add Thing</Button>
      <IconButton variant='add-icon' icon={<AddIcon />} />
      <Button variant='update-modal'>Update Thing</Button>
      <Button variant='update-card'>Update Thing</Button>
      <IconButton variant='update-icon' icon={<EditIcon />} />
    </Flex>
  )
}


export const AllButtons = Template.bind({});
AllButtons.args = {}