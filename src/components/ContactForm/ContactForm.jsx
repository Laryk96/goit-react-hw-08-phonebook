import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { Label, Input, Button, Form } from './ContactForm.styled';
import isNewName from 'services/checkContactName';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/phonebook/contactsSlice.js';
import { SubTitle } from 'components/App/App.styled';
import { Stack } from '@mui/system';
import { CircularProgress, Tooltip } from '@mui/material';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      if (isNewName(data, values.name)) {
        addContact({ name: values.name.trim(), number: values.number.trim() });
        resetForm();
      }
    },
    validationSchema: schema,
  });

  const isDisabled = !(formik.isValid && formik.dirty);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <SubTitle>Create New contact</SubTitle>
      <Tooltip title={formik.errors.name}>
        <Label>
          <Input
            autoComplete="off"
            placeholder="Name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
          {formik.errors.name && formik.touched.name ? (
            <span>{formik.errors.name}</span>
          ) : null}
        </Label>
      </Tooltip>
      <Tooltip title={formik.errors.number}>
        <Label>
          <Input
            autoComplete="off"
            placeholder="Phone"
            type="tel"
            name="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          {formik.errors.number && formik.touched.number ? (
            <span>{formik.errors.number}</span>
          ) : null}
        </Label>
      </Tooltip>
      <Button type="submit" disabled={isDisabled}>
        {isLoading ? (
          <Stack
            sx={{ color: 'grey.500', margin: '0 auto', display: 'block' }}
            spacing={2}
            direction="row"
          >
            <CircularProgress color="secondary" size={26} />
          </Stack>
        ) : (
          'Add contact'
        )}
      </Button>
    </Form>
  );
};

const pattern = {
  str: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  number: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
};

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(pattern.str, 'Name must be a string')
    .min(3, 'to short, min: 3')
    .max(20, 'to long, max: 20')
    .required(),
  number: yup.number().typeError().moreThan(12).required(),
});

export default ContactForm;
