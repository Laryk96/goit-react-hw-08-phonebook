import { Typography } from '@mui/material';
import {
  Container,
  Form,
  StyledButton,
  StyledInput,
} from 'components/SignUp/SignUp.styled';

const LoginPage = () => {
  return (
    <Container component="div">
      <Form component="form" noValidate autoComplete="off">
        <Typography
          variant="h3"
          sx={{ marginBottom: '30px', textAlign: 'center' }}
        >
          Log in to your account
        </Typography>

        <StyledInput required label="Email" type="text" variant="standard" />
        <StyledInput
          required
          label="Password"
          type="Password"
          autoComplete="current-password"
          variant="standard"
          sx={{ mb: '10px' }}
        />
        <StyledButton type="submit" variant="contained">
          log in
        </StyledButton>
      </Form>
    </Container>
  );
};

export default LoginPage;
