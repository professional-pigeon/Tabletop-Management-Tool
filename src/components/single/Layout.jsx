/* eslint-disable react/prop-types */
import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../multi/header/Header';



export default function Layout({ user, children }) {
  return (
    <Box w='100vw'>
      <Header user={user} />
      {children}
    </Box>
  );
};