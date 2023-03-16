import { Button, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

import { Header as AppBar } from './Header.styled';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: '10px' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ color: 'white' }} to="/">
            HOME
          </Link>
        </Typography>
        <Button
          component={NavLink}
          to="/favorites"
          color="inherit"
          sx={{
            '&:hover': {
              color: 'green',
            },
            '&:focus': {
              color: 'green',
            },
          }}
        >
          <StarIcon />
        </Button>
        <Button
          component={NavLink}
          to="/contacts"
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
          Contacts
        </Button>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
