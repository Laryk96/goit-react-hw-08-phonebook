import { Box } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress, Stack, Tooltip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import * as yup from 'yup';

import {
  Backdrop,
  CloseBtn,
  Fieldset,
  Icon,
  ModalBody,
  Input,
  StyledButton,
  AvatarBgd,
} from './Modal.styled';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'redux/phonebook/contactsSlice';
import { useFormik } from 'formik';
import isNewName from 'services/checkContactName';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/phonebook/selectors';
import { editFavorite } from 'redux/phonebook/favoritesSlice';

const Modal = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();
  const { data } = useGetContactsQuery();
  const [editContact, { isSuccess, isLoading, isUninitialized, isError }] =
    useEditContactMutation();
  const isFavorites = useSelector(selectFavorites).find(x => x.id === id);

  const portal = document.getElementById('modal');

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      const editedName = values.name.trim();
      const editedPhone = values.number.trim();

      if (isNewName(data, values.name)) {
        editContact({
          id,
          name: editedName ? editedName : name,
          number: editedPhone ? editedPhone : number,
        });

        if (isFavorites) {
          dispatch(
            editFavorite({
              id,
              name: editedName ? editedName : name,
              number: editedPhone ? editedPhone : number,
            })
          );
        }

        resetForm();
      }
    },
    validationSchema: schema,
  });

  useEffect(() => {
    if (!isUninitialized) {
      setTimeout(() => {
        onClose(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUninitialized]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isDisabled = !(formik.isValid && formik.dirty);

  return ReactDOM.createPortal(
    <Backdrop onClick={() => onClose(false)}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={() => onClose(false)}>
          <Icon />
        </CloseBtn>
        <AvatarBgd>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="avatar"
            width={70}
            style={{ borderRadius: '50%' }}
          />
        </AvatarBgd>
        <Fieldset
          style={{
            border: '1px solid  rgba(255, 255, 255, 0.3)',
            padding: '15px 5px',
            marginBottom: '-20px',
          }}
        >
          <p>{name}</p>

          <span>{number}</span>
        </Fieldset>
        {isUninitialized && (
          <ArrowDownwardIcon
            sx={{ fontSize: 80, color: '#fff', marginBottom: '-20px' }}
          />
        )}
        {isLoading && (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
          </Stack>
        )}
        {isSuccess && (
          <CheckCircleOutlineIcon
            sx={{ fontSize: 70, color: ' rgb(26, 172, 48)' }}
          />
        )}
        {isError && <WarningAmberIcon sx={{ fontSize: 70, color: 'red' }} />}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Fieldset>
            <Tooltip title={formik.errors.name}>
              <Label>
                <Input
                  placeholder="Name"
                  name="name"
                  type="text"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.name}
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
                  name="number"
                  placeholder="Phone"
                  type="tel"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                />
                {formik.errors.number && formik.touched.number ? (
                  <span>{formik.errors.number}</span>
                ) : null}
              </Label>
            </Tooltip>
          </Fieldset>
          <StyledButton type="submit" disabled={isDisabled}>
            <CheckCircleIcon sx={{ fontSize: 50, color: 'inherit' }} />
          </StyledButton>
        </Box>
      </ModalBody>
    </Backdrop>,
    portal
  );
};

const pattern = {
  str: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  number: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(pattern.str, 'Name must be a string')
    .min(3, 'to short, min: 3')
    .max(20, 'to long, max: 20'),

  number: yup.number().typeError().moreThan(12),
});
const initialValues = {
  name: '',
  number: '',
};

export default Modal;
