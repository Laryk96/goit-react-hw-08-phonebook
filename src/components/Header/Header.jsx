import { Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Header as AppBar } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: '10px' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ color: 'white' }} to="/">
            HOME
          </Link>
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
