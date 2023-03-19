import { Typography } from '@mui/material';
import {
  Form,
  StyledButton,
  StyledInput,
} from 'components/SignUp/SignUp.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { login } from 'redux/auth/operation';
import { Label } from 'components/ContactForm/ContactForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 8 chars minimum.'),
  // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const LogIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
    },
    validationSchema: schema,
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

      <Label>
        <StyledInput
          required
          label="Email"
          type="email"
          variant="standard"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? (
          <>{formik.errors.email}</>
        ) : null}
      </Label>
      <Label>
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
        {formik.errors.password && formik.touched.password ? (
          <span>{formik.errors.password}</span>
        ) : null}
      </Label>
      <StyledButton
        type="submit"
        variant="contained"
        disabled={!(formik.isValid && formik.dirty)}
      >
        Login
      </StyledButton>
    </Form>
  );
};

export default LogIn;
