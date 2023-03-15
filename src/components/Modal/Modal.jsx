import { Box, margin } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  ContactName,
  Icons,
} from 'components/ContactListItem/ContactListItem.styled';
import { StyledInput } from 'components/SignUp/SignUp.styled';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Backdrop, ContactItem, ModalBody, StyledButton } from './Modal.styled';

const Modal = ({ id, name, phone, onClose }) => {
  const portal = document.getElementById('modal');

  const handleSubmit = e => {
    e.preventDefault();

    console.log(e.currentTarget.elements.name);
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <Backdrop onClick={onClose}>
      <ModalBody>
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
        <ArrowDownwardIcon
          sx={{ fontSize: 80, color: '#fff', marginBottom: '-20px' }}
        />
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
              type="text"
              variant="outlined"
              sx={{ width: '35%' }}
            />

            <StyledInput
              required
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
