import { Typography } from '@mui/material';

import { StyledButton, StyledInput, Form, Container } from './SignUp.styled';

const SignUp = () => {
  return (
    <Container component="div">
      <Form component="form" noValidate autoComplete="off">
        <Typography variant="h3" sx={{ marginBottom: '30px' }}>
          Sign up
        </Typography>

        <StyledInput required label="Username" type="text" variant="standard" />
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
          Sign up
        </StyledButton>
      </Form>
    </Container>
  );
};

export default SignUp;
