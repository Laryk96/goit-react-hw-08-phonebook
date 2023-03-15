import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(3px)',
        padding: '10px',
        mb: '150px',
      }}
    >
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
