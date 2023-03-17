import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { Label, Input, Button, Form } from './ContactForm.styled';
import isNewName from 'services/checkContactName';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { SubTitle } from 'components/App/App.styled';
import { Stack } from '@mui/system';
import { CircularProgress } from '@mui/material';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isSuccess, isLoading }] = useAddContactMutation();

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      if (isNewName(data, values.name)) {
        addContact(values);
        resetForm();
      }
    },
    validationSchema: schema,
  });
  console.log(isSuccess);
  return (
    <Form onSubmit={formik.handleSubmit}>
      <SubTitle>Create New contact</SubTitle>
      <Label>
        <Input
          autoComplete="off"
          placeholder="Name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name.trim()}
          required
        />
        {formik.errors.name ? <p>{formik.errors.name}</p> : null}
      </Label>
      <Label>
        <Input
          autoComplete="off"
          placeholder="Phone"
          type="tel"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone.trim()}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        {formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
      </Label>
      <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
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
  phone: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
};

const initialValues = {
  name: '',
  phone: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(pattern.str, 'Name must be a string')
    .min(3, 'to short, min: 3')
    .max(20, 'to long, max: 20')
    .required(),
  phone: yup.number().typeError().moreThan(12).required(),
});

export default ContactForm;
