import { Tooltip, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import { register } from 'redux/auth/operation';
import { StyledButton, StyledInput, Form } from './SignUp.styled';
import { Label } from 'components/ContactForm/ContactForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'to short, min: 3')
    .max(20, 'to long, max: 20')
    .required(),
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

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
    validationSchema: schema,
  });

  const isDisabled = !(formik.isValid && formik.dirty);

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

      <Tooltip title={formik.errors.name}>
        <Label>
          <StyledInput
            required
            label="Username"
            type="text"
            name="name"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <span>{formik.errors.name}</span>
          ) : null}
        </Label>
      </Tooltip>
      <Tooltip title={formik.errors.email}>
        <Label>
          <StyledInput
            required
            variant="standard"
            type="text"
            name="email"
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </Label>
      </Tooltip>
      <Tooltip title={formik.errors.password}>
        <Label>
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
          {formik.errors.password && formik.touched.password ? (
            <span>{formik.errors.password}</span>
          ) : null}
        </Label>
      </Tooltip>
      <StyledButton type="submit" variant="contained" disabled={isDisabled}>
        Create
      </StyledButton>
    </Form>
  );
};

export default memo(SignUp);
