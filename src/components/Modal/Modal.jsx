import { Box } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import { StyledInput } from 'components/SignUp/SignUp.styled';
import {
  ContactName,
  Icons,
} from 'components/ContactListItem/ContactListItem.styled';
import {
  Backdrop,
  CloseBtn,
  ContactItem,
  Icon,
  ModalBody,
  StyledButton,
} from './Modal.styled';
import { useEditContactMutation } from 'redux/contactsSlice';

const Modal = ({ id, name, phone, onClose }) => {
  const [editContact, { isSuccess, isLoading, isUninitialized, isError }] =
    useEditContactMutation();

  const portal = document.getElementById('modal');

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements;
    editContact({ id, name: input.name.value, phone: input.phone.value });
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (!isUninitialized) {
      setTimeout(() => {
        onClose(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  console.log(isLoading);
  console.log(isSuccess);
  return ReactDOM.createPortal(
    <Backdrop onClick={() => onClose(false)}>
      <ModalBody>
        <CloseBtn>
          <Icon />
        </CloseBtn>
        <Icons>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="avatar"
            width={60}
          />
        </Icons>
        <ContactItem>
          <ContactName>{name}</ContactName>

          <span>{phone}</span>
        </ContactItem>
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
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <ContactItem>
            <StyledInput
              required
              label="Name"
              name="name"
              type="text"
              variant="outlined"
              sx={{ width: '35%' }}
            />

            <StyledInput
              required
              name="phone"
              label="Phone"
              type="text"
              variant="outlined"
              sx={{ width: '35%' }}
            />
          </ContactItem>
          <StyledButton type="submit">
            <CheckCircleIcon sx={{ fontSize: 50, color: 'inherit' }} />
          </StyledButton>
        </Box>
      </ModalBody>
    </Backdrop>,
    portal
  );
};

export default Modal;
