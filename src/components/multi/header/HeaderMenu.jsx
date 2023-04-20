import { Menu, MenuList, MenuItem, MenuButton, IconButton } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types'
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { logoutCall } from '../../../lib/login';

export default function HeaderMenu({ isLoggedIn }) {
  const router = useRouter()

  const logoutWrap = () => {
    logoutCall().then(() => router.push('/login'))
  };
  
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        color='black'
      />
      {isLoggedIn ?
        (<MenuList color='black'>
          <MenuItem onClick={() => logoutWrap()}>Logout</MenuItem>
          <MenuItem onClick={() => router.push('/dashboard')}>Go To Dashboard</MenuItem>
        </MenuList>
        ) : (
          <MenuList  color='black'>
          <MenuItem onClick={() => router.push('/login')}>Login</MenuItem>
          <MenuItem onClick={() => router.push('/signup')}>Signup</MenuItem>
        </MenuList>
        )
      }
    </Menu>
  );
};

HeaderMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}