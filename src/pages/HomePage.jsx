import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',

        padding: '20px 100px',
        color: '#fff',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '50px',
          textAlign: 'center',
          fontWeight: '700',
          width: '630px',
          mb: '50px',
        }}
      >
        Welcome to the Phonebook - Contacts manager
      </Typography>
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          Please
          <Link
            style={{
              color: '#fff',
              textDecoration: 'underline',
              padding: '5px',
            }}
            to="/login"
          >
            log in
          </Link>
          to your account to view your contacts.
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          If you are not registered yet, please
          <Link
            style={{
              color: '#fff',
              textDecoration: 'underline',
              padding: '5px',
            }}
            to="/registration"
          >
            register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
