import { Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Button component={Link} to="/contacts" color="inherit">
          Contacts
        </Button>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/registration" color="inherit">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
