import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box>
      <Button
        component={NavLink}
        to="/login"
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
        to="/registration"
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
