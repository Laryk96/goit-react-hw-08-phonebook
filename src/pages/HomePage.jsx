import { Box, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { routsPath } from 'path/routs';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from 'services/SEO';
import Typed from 'typed.js';

const { logIn, signUp } = routsPath;

const HomePage = () => {
  const el = useRef(null);
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    new Typed(el.current, {
      strings: ['Contacts manager', 'Best phonebook'],
      typeSpeed: 40,
      backSpeed: 15,
      backDelay: 3200,
      loop: true,
      showCursor: false,
    });
  });

  return (
    <Box component="section">
      <SEO title="Phonebook manager" description="Your phone book manager" />
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
            width: '650px',
            mb: '10px',
          }}
        >
          Welcome to the Phonebook
        </Typography>
        <Box component="div" sx={{ mb: '40px', height: '60px' }}>
          <Typography
            variant="span"
            sx={{
              display: 'inline',
              fontSize: '46px',
              fontWeight: '500',
            }}
            ref={el}
          ></Typography>
        </Box>
        {isLoggedIn ? (
          <Typography variant="body1">
            You can view your
            <Link
              to="/contacts"
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              contacts
            </Link>
          </Typography>
        ) : (
          <Box
            component="div"
            sx={{
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
                to={logIn}
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
                to={signUp}
              >
                register
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
