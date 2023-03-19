import { Typography } from '@mui/material';
import {
  Form,
  StyledButton,
  StyledInput,
} from 'components/SignUp/SignUp.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';

const initialValues = {
  email: '',
  password: '',
};

const LogIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
    },
  });
  return (
    <Form
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: '30px',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Log in
      </Typography>

      <StyledInput
        required
        label="Email"
        type="email"
        variant="standard"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <StyledInput
        required
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        sx={{ mb: '10px' }}
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <StyledButton type="submit" variant="contained">
        Login
      </StyledButton>
    </Form>
  );
};

export default LogIn;
