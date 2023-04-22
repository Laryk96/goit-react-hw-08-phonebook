import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { routsPath } from 'path/routs';

import { NavLink } from 'react-router-dom';

const { logIn, signUp } = routsPath;

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', gap: '15px' }}>
      <Button
        component={NavLink}
        to={logIn}
        color="inherit"
        sx={{
          '&:hover': {
            backgroundColor: '#590081',
          },
          '&:focus': {
            backgroundColor: '#590081',
          },
        }}
      >
        Login
      </Button>
      <Button
        component={NavLink}
        to={signUp}
        color="inherit"
        sx={{
          '&:hover': {
            backgroundColor: '#590081',
          },
          '&:focus': {
            backgroundColor: '#590081',
          },
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default AuthNav;
