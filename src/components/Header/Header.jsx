import { Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

import { Header as AppBar } from './Header.styled';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ color: 'white' }} to="/">
            HOME
          </Link>
        </Typography>
        <Button
          component={Link}
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
          component={Link}
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
          component={Link}
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
          component={Link}
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
