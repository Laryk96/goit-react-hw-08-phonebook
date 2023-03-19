import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { StarIcon } from 'components/ContactListItem/ContactListItem.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operation';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = e => {
    dispatch(logOut());
  };
  return (
    <Box
      component="div"
      sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
    >
      <p>Hello, {user.name}</p>
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
        onClick={handleLogOut}
      >
        logout
      </Button>
    </Box>
  );
};

export default UserMenu;
