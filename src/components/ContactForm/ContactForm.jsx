import { useFormik } from 'formik';
import * as yap from 'yup';
import React from 'react';
import { Label, Input, Button, Form } from './ContactForm.styled';
import isNewName from 'services/checkContactName';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { SubTitle } from 'components/App/App.styled';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const pattern = {
    str: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    phone: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (isNewName(data, values.name)) {
        console.log('+++');
        addContact(values);
        resetForm();
      }
      console.log(values);
    },
    validationSchema: yap.object().shape({
      name: yap
        .string()
        .matches(pattern.str, 'Name must be a string')
        .min(3, 'to short, min: 3')
        .max(15, 'to long, max: 15')
        .required(),
      phone: yap.number().typeError().moreThan(12, 'fnnf').required(),
    }),
  });
  console.log('name');
  console.log('phone', formik.errors.phone);
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
          value={formik.values.name}
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
          value={formik.values.phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        />
        {formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
      </Label>
      <Button type="submit" disabled={!formik.isValid}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
