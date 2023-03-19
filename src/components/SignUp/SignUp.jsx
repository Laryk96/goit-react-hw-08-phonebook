import { Typography } from '@mui/material';
import { useFormik } from 'formik';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

import { StyledButton, StyledInput, Form } from './SignUp.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
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
        sx={{ marginBottom: '30px', textTransform: 'uppercase' }}
      >
        Sign up
      </Typography>

      <StyledInput
        required
        label="Username"
        type="text"
        name="name"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <StyledInput
        required
        variant="standard"
        type="text"
        name="email"
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <StyledInput
        required
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        variant="standard"
        sx={{ mb: '10px' }}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <StyledButton
        type="submit"
        variant="contained"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Create
      </StyledButton>
    </Form>
  );
};

export default memo(SignUp);
